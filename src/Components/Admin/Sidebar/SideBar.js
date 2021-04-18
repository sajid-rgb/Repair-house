import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faExternalLinkAlt, faList, faPlus, faSortAmountDownAlt, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SideBar = () => {
    const [admin, setAdmin] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://mysterious-garden-14748.herokuapp.com/admin')
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])
    let newAdmin;
    let value=false
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
    return (
        <div className='d-flex flex-column bg-dark pl-md-4 pl-2  pt-3' style={{ height: '100vh' }}>

            
                    {
                        value===true ? <div className='d-flex flex-column'>
                            <Link to='/manage' className='text-white'><FontAwesomeIcon icon={faTasks}></FontAwesomeIcon> manage</Link>
                            <Link to='/addAdmin' className='text-white'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>add admin</Link>
            <Link to='/orderList' className='text-white'><FontAwesomeIcon icon={faList}></FontAwesomeIcon>Order list </Link>
            <Link to='/addService' className='text-white'>
            <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                add service
            </Link>
                        </div>:<div className='d-flex flex-column'>
                        <Link to='/info'  className='text-white'><FontAwesomeIcon icon={faSortAmountDownAlt}></FontAwesomeIcon><span className='ml-2'>Booking List</span></Link>
            <Link to='/orderReview' className='text-white'><FontAwesomeIcon icon={faCommentAlt}></FontAwesomeIcon>  <span className='ml-1'>Order review</span> </Link>

                        </div>
                    }



        </div>
    );
};

export default SideBar;