import React from 'react';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckOutForm/CheckOutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IeOrgIxmEEp9xbrDF5DC6CI5nMP1M6pRZLLmiR68txoQMXx1K0srw67dqwrZ8acuqkqRFsFkSBFgETrbDgNZ6uJ00sVNf1SQV');
const MakePayment = ({order}) => {
    return (
        <div>
        <Elements stripe={stripePromise}>
      <CheckoutForm order={order}/>
    </Elements>
 
        </div>
    );
};

export default MakePayment;