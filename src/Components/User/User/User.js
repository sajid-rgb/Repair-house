import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import SideBar from '../../Admin/Sidebar/SideBar';
import Navigation from '../../Home/Navigtaion/Navigation';
import MakePayment from '../MakePayment/MakePayment';

const User = () => {
    const { id } = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch(`https://mysterious-garden-14748.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data[0]))
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <div className='row'>
            <div className="col-md-2 col-4">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10 col-8">
            <form onSubmit={handleSubmit(onSubmit)}>
 <label>Fill the form correctly</label><br/>
<input className='mt-3' defaultValue={loggedInUser.email} style={{width:'250px'}} placeholder='Enter email' {...register("example")} />
<br />

<input className='mt-3' defaultValue={loggedInUser.name} style={{width:'250px'}} placeholder='Enter Name' {...register("exampleRequired", { required: true })} />
{errors.exampleRequired && <span>This field is required</span>}
<br />
<input className='mt-3' defaultValue={order.name} style={{width:'250px'}} placeholder='Enter Name' {...register("order", { required: true })} />
{errors.order && <span>This field is required</span>}


</form>
<div className="bg-white mt-5 mt-md-4" style={{width:'250px'}}>
    <h6>Enter your card no. here</h6>
<MakePayment order={order}></MakePayment>
</div>
            </div>
        </div>
        </div>

    );

};

export default User;