import React, { useEffect, useState } from 'react';
import Navigation from '../../Home/Navigtaion/Navigation';
import SideBar from '../Sidebar/SideBar';

const ManageServices = () => {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('https://mysterious-garden-14748.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    })
    const handleDelete = (id)=>{
        fetch(`https://mysterious-garden-14748.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })

    }
    return (
        <div>
            <Navigation></Navigation>
            <div className='row'>
            <div className="col-md-2 col-4">
                <SideBar></SideBar>
            </div>
            <div className='col-md-10 col-8 table-responsive-sm'>
            <table className="mr-4">
                <thead className='mb-3' style={{backgroundColor:'whiteSmoke',height:'100px'}}>
                     <tr>
                     <th className="ml-0 w-25">Service</th>
                    <th className="ml-0 w-25">price</th>
                    <th className="w-50">Action</th>
                     </tr>
                </thead>
                <tbody className='mt-5'>
                {
                    services.map(service =><tr  className='mt-5 mb-5 '>
                        <td className="ml-5 w-50 ">{service.name}</td>
                        <td className="ml-5 w-50">{service.price}</td>
                        <td className="w-50">
                         <button className="btn btn-danger" onClick={() =>handleDelete(service._id)}>Delete</button>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
            </div>
          
        </div>
        </div>
    );
};

export default ManageServices;