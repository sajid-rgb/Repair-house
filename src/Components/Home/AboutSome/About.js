import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import mobile from '../../../images/mobile.jpg'
const About = () => {
    return (
        <div className='row container mx-auto mt-4 mb-5'>
            <div className="col-md-7 mt-5" >
              <h4 className='mt-5 span'>ABOUT SOMETHING</h4>
              <h1>It’s Our Honour, To
Be With You</h1>
<p>There are many variations of passages of electronics Services, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. by injected humour, or randomised words which don't look.</p>

{/* <p>There are many variations of passages of electronics repair, but the majority have suffered alteration in some form, by injected humour, or randomised words duskam azer which don't look

</p> */}
<button className='btn text-white' style={{backgroundColor:'orangered'}}>Discover More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
            <div className="col-md-5 mt-2 mb-5">
                <img src={mobile} className='img-fluid rounded mt-5' alt="" srcset=""/>
            </div>
            
        </div>
    );
};

export default About;