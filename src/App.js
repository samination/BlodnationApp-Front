import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DCandidates from './components/DCandidates';
import Main from './components/MainPageComponent'
import BloodPatients from './components/BloodPatients'
import Login from './components/LoginComponent'
import PrimarySearchAppBar from './components/HeaderComponent'
import { Container,BottomNavigation} from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";
import Footer from "./components/FooterComponent"
import SimpleMap from "./components/MapComponent"
import GoogleMapReact from 'google-map-react';
import { Switch, Route,BrowserRouter } from 'react-router-dom';


import Signup from "./components/SignupComponent"
import { login } from './actions/Login';

function App() {
  return (
    <Provider store={store}>


      
      <ToastProvider autoDismiss={true}>
      <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/DCandidates" component={BloodPatients} />
    </Switch>
    </BrowserRouter>
     
      
<Footer Footer/>
  

      </ToastProvider>
    </Provider>




    
  );
}

export default App;
