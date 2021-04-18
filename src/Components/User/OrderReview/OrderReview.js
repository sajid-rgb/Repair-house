import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import SideBar from '../../Admin/Sidebar/SideBar';
import Navigation from '../../Home/Navigtaion/Navigation';

const OrderReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log('img',loggedInUser);
    console.log('pp',loggedInUser);
    const onSubmit = data => {
        data.email = loggedInUser.email;
        data.name = loggedInUser.name;
        data.image = loggedInUser.img;
        fetch('https://mysterious-garden-14748.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        console.log(data);
    };
    return (
        <div>
            <Navigation></Navigation>
            <div className="row">
                <div className="col-md-2 col-4">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10 col-8 d-flex flex-column  mt-5">
                    <form onSubmit={handleSubmit(onSubmit)} className='ml-md-5 ml-0'>
                        <label>Please review us. If you want </label><br/>
                        <input defaultValue={loggedInUser.name} name='name' {...register("name")} className='w-75 mt-3' /><br />
                        {errors.name && <span>This field is required</span>}
                        <input defaultValue="" placeholder='Enter your designation' name='designation' {...register("designation")} className='w-75 mt-3' /><br />
                        {errors.designation && <span>This field is required</span>}
                        {/* <input type='text' name='description'{...register("description", { required: true })} className='w-50 mt-3' style={{height:'100px'}}/><br/>
      {errors.description && <span>This field is required</span>} */}
                        <textarea name='description' placeholder='Write your review' cols='100' rows='5' {...register("description", { required: true })} className='w-75 mt-3' /><br />
                        {errors.description && <span>This field is required</span>}
                        <button className="btn btn-success mt-2">Submit</button>
                    </form>

                </div>
            </div>
        </div>


    );

};

export default OrderReview;