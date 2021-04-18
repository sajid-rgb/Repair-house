import React from 'react';
import faq from '../../../images/new.jpg'
import FAQ from '../FAQ/FAQ';
const faqs = [{
    question:"What is your service charge?",
    answer:'$20 per services including VAT'
},
{
    question:"How to pay?",
    answer:'You can pay in credit card only'
},
{
    question:"When my service will be ready?",
    answer:'It takes 3 working days'
}
]
const SimpleFAQ = () => {
    return (
        <div className='row container mx-auto  bg-info mb-5 mt-5'>
            <div className="col-lg-6 mt-5 ">
                <h2 className='ml-md-5 ml-0 text-center span'>Simple FAQ</h2>
            {
                faqs.map(faq=><FAQ faq={faq}></FAQ>)
            }
            </div>
            <div className="col-lg-6">
                <img src={faq} className='img-fluid mr-5 rounded mt-4 mb-4' alt=""/>
            </div>
        </div>
    );
};

export default SimpleFAQ;