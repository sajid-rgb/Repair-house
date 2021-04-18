import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Navigation from '../../../Home/Navigtaion/Navigation';
import BookingService from '../../../User/BookingService/BookingService';
import SideBar from '../../Sidebar/SideBar';
import AddService from '../AddService';

const Admin = () => {
    const [admin, setAdmin] = useState([])
    const [isAdmin,setIsAdmin] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://mysterious-garden-14748.herokuapp.com/admin')
            .then(res => res.json())
            .then(data => setAdmin(data))
    },[])
    let newAdmin;
    let value=false
    console.log(admin.length,admin);
    if(admin.length>0){
         newAdmin = admin.find(ad=>ad.email===loggedInUser.email )
         console.log('check',newAdmin);
         if(newAdmin){
              value=true
        }
        else{
            value=false
        }
          


    }
   console.log(value);
    return (
        <div>
            <Navigation></Navigation>
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10">
                {
                    value===true ? <AddService></AddService> : <BookingService></BookingService>
                }
                
                </div>
            </div>

        </div>
    );
};

export default Admin;