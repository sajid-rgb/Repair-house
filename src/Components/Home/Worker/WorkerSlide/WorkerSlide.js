import React from 'react';
const WorkerSlide = ({worker}) => {
    const {name,from,img,experience} = worker
    return (
    
       <div className='col-md-5 mt-1 mb-5 g-3 ml-5' style={{border:'2px solid green'}}>
       <div className='row '>
            <div className="col-md-7 d-flex flex-column justify-content-center align-items-center mb-5">
            <div className='mt-md-5 mt-2 ml-md-5 ml-0'>
                <h5>{name}</h5>
                <h5>{from}</h5>
                <h6>{experience}</h6>
            </div>
            </div>
            <div className="col-md-5 mt-md-5 mt-0  mb-md-5 mb-1" >
                <div>
                    <img src={img} className='img-fluid w-100 rounded-circle mt-md-3 mt-0' alt="" srcset=""/>
                </div>
            </div>
       </div>
       </div>
    
    );
};

export default WorkerSlide;