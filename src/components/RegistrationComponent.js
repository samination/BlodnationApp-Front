
import React, { useState, useEffect } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useForm from "./useForm";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import * as actions from "../actions/HospitalAdmin";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialFieldValues = {
  Username: '',
  Email: '',
  Password: '',
  Fullname: '',
  
}

const SignUp= (props) => {

  const { addToast } = useToasts()
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('Username' in fieldValues)
            temp.Username = fieldValues.Username ? "" : "This field is required."

        if ('Email' in fieldValues)
            temp.Email = (/^$|.+@.+..+/).test(fieldValues.Email) ? "" : "Email is not valid."
        setErrors({
            ...temp
        })
        if ('Password' in fieldValues)
            temp.Password = fieldValues.Password ? "" : "This field is required."
        if ('Fullname' in fieldValues)
            temp.Fullname = fieldValues.Fullname ? "" : "This field is required."
       
            
        

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }


  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
} = useForm(initialFieldValues, validate, props.setCurrentId)

  
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) {
        const onSuccess = () => {
            resetForm()
            addToast("Congaaats you are now a blood donation user :)", { appearance: 'success' })
        }
     
            props.createDCandidate(values, onSuccess)
            addToast(" Congaaats you are now a blood donation user :)", { appearance: 'success' })
        
    }
}

useEffect(() => {
    if (props.currentId != 0) {
        setValues({
            ...props.dCandidateList.find(x => x.id === props.currentId)
        })
        setErrors({})
    }
}, [props.currentId])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Username"
                name="Username"
                variant="outlined"
                required
                fullWidth
                id="Username"
                label="Username"
                value={values.Username}
                        onChange={handleInputChange}
                        {...(errors.Username && { error: true, helperText: errors.Username })}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Fullname"
                label="Fullname"
                name="Fullname"
                autoComplete="Fullname"
                value={values.Fullname}
                        onChange={handleInputChange}
                        {...(errors.Fullname && { error: true, helperText: errors.Fullname })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Email"
                label="Email Address"
                name="Email"
                value={values.Email}
                        onChange={handleInputChange}
                        {...(errors.Email && { error: true, helperText: errors.Email })}
                autoComplete="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Password"
                label="Password"
                type="Password"
                id="Password"
                value={values.Password}
                        onChange={handleInputChange}
                        {...(errors.Password && { error: true, helperText: errors.Password })}
                autoComplete="current-password"
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="http://localhost:3000/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}




const mapStateToProps = state => ({
  dCandidateList: state.dCandidate.list
})

const mapActionToProps = {
  createDCandidate: actions.create,
  
}

export default connect(mapStateToProps, mapActionToProps)(SignUp);