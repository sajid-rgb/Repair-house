import axios from 'axios';
import React, { useState } from 'react';

const AddService = () => {
    const [service,setService]=useState({
        name:'',
        imgURL:'',
        description:'',
        price:''
    })
    
    const handleAdd = (e) =>{
        if(service.name && service.price && service.description)
       { fetch('https://mysterious-garden-14748.herokuapp.com/addService',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(service)
        })
        }
        e.preventDefault()
    }
    const handleOnBlur=(e)=>{
        const newService={...service}
        newService[e.target.name]=e.target.value;
        setService(newService)

    }
    const handleChangeImage = (event) =>{
        const imageData = new FormData();
        imageData.set('key','a5e20ad2d20e8e8417f6fd306447737a')
        imageData.append('image',event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (response) {
              service.imgURL=response.data.data. display_url
            
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div>
           <form action="">
               <h3>Add Products Here</h3>
           <input type="text" className='' name='name' onBlur={handleOnBlur} placeholder='Enter Name'  required style={{width: '250px'}}/><br/>
           <input type="text" name='description' onBlur={handleOnBlur} placeholder='description' className='mt-2' style={{width: '250px'}} required/><br/>
           <input type="text" name='price' className='mt-2' onBlur={handleOnBlur} placeholder='price' style={{width: '250px'}} required/><br/> <br/>
           <input type="file" onChange={handleChangeImage} required/><br/>
           <button className='btn btn-success mt-3'  onClick={handleAdd} >Add Services</button>
           </form>
        </div>
    );
};

export default AddService;