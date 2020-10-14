import React, { useState, useEffect } from "react";
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import * as actions from "../actions/HospitalAdmin";


const styles = theme => ({


    
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialFieldValues = {
    Username: '',
    Email: '',
    Password: '',
    Fullname: '',
    
}



const Signup = ({ classes, ...props }) => {

    //toast msg.
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

   /* const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);*/

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const onSuccess = () => {
                resetForm()
                addToast("Congaaats you are now a blood donation user :)", { appearance: 'success' })
            }
            resetForm()
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

        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit} > 


<Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="Username"
                        variant="outlined"
                        label="Username"
                        value={values.Username}
                        onChange={handleInputChange}
                        {...(errors.Username && { error: true, helperText: errors.Username })}
                    /> <br/>
                    <TextField
                        name="Email"
                        variant="outlined"
                        label="Email"
                        value={values.Email}
                        onChange={handleInputChange}
                        {...(errors.Email && { error: true, helperText: errors.Email })}
                    /> <br/>
                    <TextField
                        name="Password"
                        variant="outlined"
                        label="Password"
                        type="Password"
                        value={values.Password}
                        onChange={handleInputChange}
                        {...(errors.Password && { error: true, helperText: errors.Password })}
                    /><br/>
                    <TextField
                        name="Fullname"
                        variant="outlined"
                        label="Full Name"
                        value={values.Fullname}
                        onChange={handleInputChange}
                        {...(errors.Fullname && { error: true, helperText: errors.Fullname })}
                    /><br/>
                    <div>
                        <br/><Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}
                        >
                            Signup
                        </Button>
                        <Button
                           variant="contained"
                           className={classes.smMargin}
                           onClick={resetForm}
                         
                        >
                            Reset
                        </Button>
                    </div>
                </Grid><br/>
                <Grid item xs={6}>
                    
                    
                </Grid>
            </Grid>
        </form>
        )
}

const mapStateToProps = state => ({
    dCandidateList: state.dCandidate.list
})

const mapActionToProps = {
    createDCandidate: actions.create,
    
}


export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Signup));