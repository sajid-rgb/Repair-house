import React, { useEffect, useState } from 'react';
import Navigation from '../../Home/Navigtaion/Navigation';
import SideBar from '../Sidebar/SideBar';

const OrderList = () => {
    const [order,setOrder] = useState([])
    const [statusChange,setStatusChange] = useState(null)
    useEffect(()=>{
        fetch('https://mysterious-garden-14748.herokuapp.com/userInfos')
        .then(res=>res.json())
        .then(data=>setOrder(data))
    })
    const handleStatusChange = (e) =>{
        setStatusChange(e.target.value);

    }
    
    const handleStatusUpdate = (id) =>{
        fetch(`https://mysterious-garden-14748.herokuapp.com/status/${id}`,{
            method:'PATCH',
            headers:{             
                'Content-Type':'application/json'
              },
            body:JSON.stringify({statusChange})
        })
    }

    return (
        <div >
            <Navigation></Navigation>
            <div className="row">
                <div className="col-md-2 col-4">
                <SideBar></SideBar>
                </div>
                <div className="col-md-10 col-8 table-responsive-sm" >
                    <table >
                        <thead>
                            <tr className=''>
                                <th className='w-50 ml-0'>Name</th>
                                <th className='w-50 ml-5'>Services</th>
                                <th className='w-50 ml-0'>Email</th>
                                <th className='w-50 ml-0'>Card Id</th>
                                <th className='w-100 ml-0'>Current Status</th>
                                <th className='w-100 ml-5'>Change Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order.map(or=><tr className='' style={{border:'2px solid black'}}>
                                   <td className='w-50 ml-0'>{or.name}</td>
                                   <td className='w-50 ml-5'>{or.serviceName}</td>
                                    <td className='w-50 ml-0'>{or.email}</td>
                                    <td className='w-50 ml-0'>{or.id}</td>
                                    <td className='w-100 ml-0'>{or.status}</td>
                                    <td className='w-100 ml-5 mt-0'>
                                        <select onChange={handleStatusChange}>
                                            <option>Select</option>
                                           <option>pending</option>
                                           <option>on going</option>
                                           <option>Done</option>
                                        </select>
                                        <button className='mt-2' onClick={()=>handleStatusUpdate(or._id)}>update</button>
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

export default OrderList;