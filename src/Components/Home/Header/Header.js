import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div  className='d-flex justify-content-center align-items-center header '>
               <div className='title'>
               <h1>WE <span className='span'>FIX</span>,AS <br/><span className='span'>SOON</span> AS POSSIBLE</h1>
            <p>We provide world's no.1 electronic services</p>
            <div className="text-center">
            <button className='button'>Know More <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></button>
            </div>
               </div>
        </div>
    );
};

export default Header;