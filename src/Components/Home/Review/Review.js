import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import girl from '../../../images/girl1.jpg'
import man from '../../../images/man.jpg'
import gentle from '../../../images/man2.jpg'
import ReviewCard from './ReviewCard/ReviewCard';
// const reviews =[
//     {
//        name:'Lata Thakur',
//        review:'There services are good. they served with low cost and provide highest services',
//        img:girl
//     },
//     {
//         name:'Musolin Khan',
//         review:'There services are good. they served with low cost and provide highest services',
//         img:man
//      },
//      {
//         name:'Afsar Chowdhury',
//         review:'There services are good. they served with low cost and provide highest services',
//         img:gentle
//      }
// ]
const Review = () => {
    const [reviews,setReviews] = useState([])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    useEffect(()=>{
        fetch('https://mysterious-garden-14748.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='container text-center mt-5'>
          <div className="mb-4">
          <h1 className='mt-5'>What Our <span style={{color:'orangered'}}>Customer</span> Says?</h1>
            <p>We love our customer</p>
          </div>
            <div className="row container mx-auto mt-5 mb-3">

                {
                    reviews.map(review=><ReviewCard review={review}></ReviewCard>)
                }
            
            </div>
        </div>
    );
};

export default Review;