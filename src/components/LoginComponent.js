import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText ,Link,InputAdornment} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle'
import ButtonBases from "./ImageButtonComponent"
import { Switch, Route,BrowserRouter } from 'react-router-dom';
import DCandidates from '../components/DCandidates';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../actions/Login";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const styles = theme => ({


    
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(4),
            minWidth: 230,
            
            
            
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
        padding: '0 30px',
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  /*const { isLoggedIn } = useSelector (state => state.isLoggedIn);*/
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/DCandidates");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  /*if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }*/

  return (
    <div className="col-md-12">
      <div className="card card-container">

      <BrowserRouter>
    <Switch>
      
      <Route exact path="/DCandidates" component={DCandidates} />
    </Switch>
    </BrowserRouter>
        

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            
            <TextField
              type="text"
              label="UserName"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}/>
          </div>

          <div className="form-group">
           
            <TextField
              type="password"
              label="Password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
          <ButtonBases></ButtonBases>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;