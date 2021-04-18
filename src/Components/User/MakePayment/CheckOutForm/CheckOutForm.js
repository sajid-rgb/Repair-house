import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';

const CheckoutForm = ({order}) => {
    const {name,imgURL,price,description} = order;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log('name',name);
    const user={
        serviceName:order.name,
        imgURL:order.imgURL,
        price:order.price,
        description:order.description,
        email:loggedInUser.email,
        name:loggedInUser.name,
        status:'pending'
    }
    const [userInfo,setUserInfo] =useState( {})
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
   console.log('card',cardElement);
    if (error) {
      console.log('[error]', error);
      const errorMessage = error.message;
      const newUserInfo = {...userInfo,...user}
      newUserInfo.error= errorMessage;
      setUserInfo(newUserInfo)
      user.error=errorMessage
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      const newUserInfo = {...userInfo,...user}
      newUserInfo.id= paymentMethod.id;
      newUserInfo.error= '';
      setUserInfo(newUserInfo)
      user.id= paymentMethod.id;
      user.error=''
      if(paymentMethod.id){
        fetch('https://mysterious-garden-14748.herokuapp.com/addInfo',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
      }
      
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button as={Link} to='/info' type="submit" disabled={!stripe} >
        Pay
      </button>
      {
          userInfo.error && <p>{userInfo.error}</p>
      }
    </form>
  );
};
export default CheckoutForm;