import { faFacebook, faFacebookF, faInstagram, faInstagramSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white mb-0 mt-5">
                    <div className='container mt-5'>
            <div className='row mt-5'>
            <div className="col-md-3 col-6">
                <div className='mt-5'>
                    <h5>REPAIR <br/><span className='span'>HOUSE</span></h5>
                    <h6>You can subscribe our page any time </h6>
                    <input type="text" placeholder='Enter your email'/>
                    <button className="btn btn-success mt-2">Subscribe Now</button>
                </div>
            </div>
            <div className="col-md-3 col-6">
                <div className='mt-5 ml-4 ml-md-0'>
                    <h5>SERVICES</h5>
                        <p>Electronic repair</p>
                        <p>Electrical services</p>
                        <p>Mobile services</p>
                    
                </div>
            </div>
            <div className="col-md-3 col-6">
                <div className='mt-5'>
                    <h5>Quick Contact</h5>
                    <h6>Baily Road,123/A,Shantinagar Dhaka</h6>
                    <p>reapairhiuse1212@gamil.com</p>
                    <p>+01321121212</p>
                </div>
            </div>
            <div className="col-md-3 col-6">
                <div className='mt-5 ml-5 ml-md-0 mr-3 mr-md-0'>
                    <h5>SOCIAL MEDIA</h5>
                    <h6>You can follow us </h6>
                    <div>
                    <FontAwesomeIcon icon={faYoutube} style={{color:'red'}}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faFacebookF} style={{color:'blue'}} className='ml-2'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faInstagram} style={{color:'red'}} className='ml-2'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter} style={{color:'blue'}} className='ml-2'></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            
        </div>
        <hr style={{backgroundColor:"white"}}/>
        <p className="text-center">
        <small className='text-center'>copyright @ repair house 2021 all right reserved</small>

        </p>
         </div>
        </div>

    );
};

export default Footer;