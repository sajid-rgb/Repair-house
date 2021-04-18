import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
const Review = () => {
    const [reviews,setReviews] = useState([])
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