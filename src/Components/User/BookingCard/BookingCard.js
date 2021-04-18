import React from 'react';
import { Card } from 'react-bootstrap';

const BookingCard = ({book}) => {
    const {serviceName,imgURL,description,email,status} = book
    return (
        <div className='col-md-4  mt-3'>
            <div>
                <img src={imgURL} className='w-50 img-fluid'  alt="" srcset=""/>
                <button className="btn btn-success ml-md-5 ml-2">{status}</button>
            </div>
            <div>
                 <h6 className='text-center mt-3'>{serviceName}</h6>
                 <p>{description}</p>
            </div>
             {/* <Card>
                 <Card.Img src={imgURL} className='w-100'></Card.Img>
                 <Card.Body>
                     <Card.Title>{serviceName}</Card.Title>
                     <Card.Text>{description}</Card.Text>
                     <button className="btn btn-success">{status}</button>
                 </Card.Body>
             </Card> */}
        </div>
    );
};

export default BookingCard;