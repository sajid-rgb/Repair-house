import React from 'react';

const BookingCard = ({book}) => {
    const {serviceName,imgURL,description,email,status} = book
    return (
        <div className='col-md-4  mt-3'>
            <div>
                <img src={imgURL} className='w-50 img-fluid'  alt="" srcset=""/>
                {
                    status==='Done' ? <button className="btn btn-secondary ml-md-5 ml-2">{status}</button>: status ==='on going'? <button className="btn btn-success ml-md-5 ml-2">{status}</button>:<button className="btn btn-danger ml-md-5 ml-2">{status}</button>
                }
            </div>
            <div>
                 <h6 className='text-center mt-3'>{serviceName}</h6>
                 <p>{description}</p>
            </div>
        </div>
    );
};

export default BookingCard;