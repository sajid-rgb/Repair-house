import axios from 'axios';
import React, { useState } from 'react';

const AddService = () => {
    const [service,setService]=useState({
        name:'',
        imgURL:'',
        description:'',
        price:''
    })
    
    const handleAdd = () =>{
        fetch('https://mysterious-garden-14748.herokuapp.com/addService',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(service)
        })
        

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
    console.log(service);
    return (
        <div>
           <input type="text" name='name' onBlur={handleOnBlur} placeholder='Enter Name'/><br/>
           <input type="text" name='description' onBlur={handleOnBlur} placeholder='description'/><br/>
           <input type="text" name='price' onBlur={handleOnBlur} placeholder='price'/><br/>
           <input type="file" onChange={handleChangeImage}/><br/>
           <button className='btn btn-warning' onClick={handleAdd} >Add</button>
        </div>
    );
};

export default AddService;