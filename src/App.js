import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DCandidates from './components/DCandidates';
import BloodPatients from './components/BloodPatients'
import Signin from './components/SignIn'
import { ToastProvider } from "react-toast-notifications";
import SimpleMap from "./components/MapComponent"
import GoogleMapReact from 'google-map-react';
import { Switch, Route,BrowserRouter,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignUp from "./components/RegistrationComponent"




const PrivateRoute = ({ component: Component, ...rest }) => {
  const userLoggedIn = localStorage.getItem('user');
  return (
    <Route
      {...rest}
      render={(props) => (
        userLoggedIn
          ? <Component {...props} />
          : (
            <Redirect to={{
              pathname: '/',
            }}
            />
          )
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};




function App() {
  return (
    <Provider store={store}>


      
      <ToastProvider autoDismiss={true}>
      <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <PrivateRoute exact path="/DCandidates" component={BloodPatients} />
      <PrivateRoute path="/BloodDonors" component={DCandidates} />
      <Route exact path="/Signup" component={SignUp} />
    </Switch>
    </BrowserRouter>
     
      

  

      </ToastProvider>
    </Provider>




    
  );
}

export default App;
