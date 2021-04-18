import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { UserContext } from '../../../App';
const Navigation = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <Navbar  expand='lg' className='d-flex flex-row justify-content-between'>
             <Navbar.Brand as={Link} to='/home' className='ml-3' style={{letterSpacing:'6px'}}>REPAIR <br/><span className='span'>HOUSE</span></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             
             <Navbar.Collapse id="basic-navbar-nav"> 

<Nav className='ml-auto'>
    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
    <Nav.Link to='/services'>Services</Nav.Link>
    <Nav.Link as={Link} to='/admin'>Dashboard</Nav.Link>
    {
        loggedInUser.email ? <Nav.Link as={Link} to='/login' OnClick={()=>setLoggedInUser({})}>Sign Out</Nav.Link>:<Nav.Link as={Link} to='/login'>Sign In</Nav.Link> 
    }

</Nav>
</Navbar.Collapse>
             

            </Navbar>
        </div>
    );
};

export default Navigation;