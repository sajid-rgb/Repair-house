import React from 'react';
import Slider from 'react-slick';
const ReviewCard = ({review}) => {
    const {name,image,description,designation} = review;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
    
        <div className='col-md-4 mb-4'>
                       
            <div>
                <div>
                    <img src={image} className='w-25 rounded-circle' style={{height:'80px'}} alt=""/>
                </div>
                <div className='mt-3 text-center'>
                    <p>{description}</p>
                    <small>{name}</small><br/>
                    <small>{designation}</small>
                </div>
            </div>

        </div>
    
    );
};

export default ReviewCard;