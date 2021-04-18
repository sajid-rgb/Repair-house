import { useSpring, animated } from 'react-spring'
import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
   const ServiceCard=({service})=>{
       const {imgURL,name,description,_id} = service
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
    if(admin.length>0){
         newAdmin = admin.find(ad=>ad.email===loggedInUser.email )
         if(newAdmin){
              value=true
        }
        else{
            value=false
        }
          


    }
    return (
        <div className='col-md-4'>
            <div className="text-center card">
                <Card className='mb-3 ' style={{height:'380px'}}>
                      <div className='face front'><Card.Img src={imgURL} className='card-img '></Card.Img></div>
                      
                    <Card.Body className='card-body'>
                    {
                        value===false ? <Link to={'/user/'+_id} className='text-dark'><Card.Title className='card-title'>{name}</Card.Title></Link>:<Link to='/admin' className='text-dark'><Card.Title className='card-title'>{name}</Card.Title></Link>
                    }
                        <Card.Text className='mt-3'>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    );
};

export default ServiceCard;