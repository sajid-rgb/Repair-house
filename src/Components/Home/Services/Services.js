import React, { useEffect, useState } from 'react';
import pc from '../../../images/pc1.jpg'
import laptop from '../../../images/laptop1.jpg'
import mobile from '../../../images/mobile1.jpg'
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('https://mysterious-garden-14748.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    })
    return (
        <div>
            <div className="container mx-auto text-center mb-5 mt-5 ">
                <h1>OUR <span style={{ color:'orangered'}}>SERVICES</span></h1>
                <p style={{width:'60%',margin:'auto'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate sint inventore recusandae iure quidem mollitia tempora deleniti maxime fuga.</p>
            </div>
            <div className='row container mx-auto'>
                {
                    services.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;