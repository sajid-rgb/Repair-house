import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Admin from './Components/Admin/AddService/Admin/Admin';
import LogIn from './Components/Login/LogIn./LogIn';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import User from './Components/User/User/User';
import BookingService from './Components/User/BookingService/BookingService';
import AddAdmin from './Components/Admin/AddAdmin/AddAdmin';
import OrderReview from './Components/User/OrderReview/OrderReview';
import OrderList from './Components/Admin/OrderList/OrderList';
import ManageServices from './Components/Admin/MangeServices/ManageServices';
import AddService from './Components/Admin/AddService/AddService';
export const UserContext = createContext()
function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  console.log('log',loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/admin'>
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path='/user/:id'>
            <User></User>
          </PrivateRoute>
          <PrivateRoute path='/info'>
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path='/addAdmin'>
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path='/addService'>
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path='/orderReview'>
            <OrderReview></OrderReview>
          </PrivateRoute>
          <PrivateRoute path='/orderList'>
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path='/manage'>
            <ManageServices></ManageServices>
          </PrivateRoute>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route path='*'>
            <h3 className='text-danger text-center'>Link not found</h3>
          </Route>
        </Switch>
      </Router>

    </div>
    </UserContext.Provider>
  );
}

export default App;
