import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Admin/Sidebar/SideBar';
import Navigation from '../../Home/Navigtaion/Navigation';
import BookingCard from '../BookingCard/BookingCard';

const BookingService = () => {
    const [booked,setBooked] = useState([])
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch('https://mysterious-garden-14748.herokuapp.com/userInfos')
        .then(res=>res.json())
        .then(data=>setBooked(data))
    })
    const bookingList = booked.filter(bk=>bk.email===loggedInUser.email)
    return (
         <div>
              <div className="row mt-5"> 
                {
                    bookingList.map(book=><BookingCard book={book}></BookingCard>)
                }
        </div>
         </div>
    );
};

export default BookingService;