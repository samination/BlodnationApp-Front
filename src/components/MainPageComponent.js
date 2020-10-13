import React, { useState, useEffect,component } from "react";
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText ,Link,InputAdornment} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle'
import PasswordField from 'material-ui-password-field'
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";
import { useToasts } from "react-toast-notifications";
import Signup from "./SignupComponent"
import ButtonBases from "./ImageButtonComponent"







/*const mapActionToProps = {
    fetchAllDCandidates: actions.fetchAll,
    deleteDCandidate: actions.Delete
}*/


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

const initialFieldValues = {
    email: '',
    password: '',
    
}


const Main = ({ classes, ...props }) => {

   /* const validate = (fieldValues = values) => {

        let temp = { ...errors }
       
            
        if ('email' in fieldValues)
            temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }


    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, validate, props.setCurrentId)*/


return(
    <Grid container className="text-center">
    
    <form autoComplete="off" noValidate className={classes.root} >
<Grid container>
<Grid item xs={6}>

</Grid>
<Grid item xs={6}>
<TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="UserName"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
      
        className={classes.margin}
        type="Password"
        id="input-with-icon-textfield"
        label="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              
            </InputAdornment>
          ),
        }}
      />









</Grid>



</Grid>
<div>

                        
                        <ButtonBases></ButtonBases>
                    </div>
</form> 
</Grid>



)
}
export default withStyles(styles)(Main);