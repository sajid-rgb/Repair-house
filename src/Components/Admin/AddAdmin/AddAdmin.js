import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Home/Navigtaion/Navigation';
import SideBar from '../Sidebar/SideBar';

const AddAdmin = () => {
    const [admin, setAdmin] = useState({})
    const handleAddAdmin = () => {
        fetch('https://mysterious-garden-14748.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        })


    }
    const handleBlur = (e) => {
        const newAdmin = { ...admin }
        newAdmin[e.target.name] = e.target.value
        setAdmin(newAdmin)
    }
    const [admins, setAdmins] = useState([])
    useEffect(() => {
        fetch('https://mysterious-garden-14748.herokuapp.com/admin')
            .then(res => res.json())
            .then(data => setAdmins(data))
    })
    return (
        <div>
            <Navigation></Navigation>
            <div className="row">
                <div className="col-md-2 col-4">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10 col-8">
                    <div>
                        <input type="text" name='email' placeholder='Enter email' className='form-control w-75' onBlur={handleBlur} placeholder='Add an admin' /> <button onClick={handleAddAdmin} className="btn btn-success mb-2 mt-3">Add Admin</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                admins.map(adm => <tr>
                                    <td className='w-75 ml-3'>{adm.email}</td>
                                    <td className='w-75 ml-5'><FontAwesomeIcon icon={faTimes} className='text-danger ml-3'></FontAwesomeIcon></td>
                                </tr>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default AddAdmin;