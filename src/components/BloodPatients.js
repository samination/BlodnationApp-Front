import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/BloodPatient";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button ,Avatar,TablePagination } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useToasts } from "react-toast-notifications";
import BloodPatientForm from "./BloodPatientForm";
import PrimarySearchAppBar from "./HeaderComponent";
import { useHistory } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import FooterPage from './FooterComponent'




const styles = theme => ({  
    
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})



const BloodPatients = ({ classes, ...props }) => {
    const [currentId, setCurrentId] = useState(0)
    const history = useHistory()
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);

    useEffect(() => {
        props.fetchAllDCandidates()
    }, [])//componentDidMount
    
    //toast msg.
    const { addToast } = useToasts()

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?'))
            props.deleteDCandidate(id,()=>addToast("Deleted successfully", { appearance: 'info' }))
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    const handleMenuClose = () => {
        
         history.push("/BloodDonors");
        window.location.reload();
        
      };
    return (
        <div>
  <div>
      <FadeTransform in 
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
        <header>
<PrimarySearchAppBar></PrimarySearchAppBar>
        </header>
        
        
        <Paper className={classes.paper} elevation={3}>
            
            <Grid container>
                <Grid item xs={6}>

                <BloodPatientForm {...({ currentId, setCurrentId })} />
                    
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                            
                                <TableRow>
                                    <TableCell>Profile Photo</TableCell>
                                    <TableCell>Blood Patient Name</TableCell>
                                    <TableCell>Blood Patient Mobile</TableCell>
                                    <TableCell>Blood Group</TableCell>
                                    <TableCell>Blood Patient Urgency</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            
                                {
                                    props.dCandidateList.map((record, index) => {
                                        return (<TableRow key={index} hover>
                                            <TableCell><Avatar alt="Remy Sharp" src="1.jpg" /></TableCell>
                                            <TableCell>{record.fullname}</TableCell>
                                            <TableCell>{record.mobile}</TableCell>
                                            <TableCell>{record.bloodgroup}</TableCell>
                                            <TableCell>{record.urgency}</TableCell>
                                            <TableCell>
                                                <ButtonGroup variant="text">
                                                    <Button><EditIcon color="primary"
                                                        onClick={() => { setCurrentId(record.id) }} /></Button>
                                                    <Button><DeleteIcon color="secondary"
                                                        onClick={() => onDelete(record.id)} /></Button>
                                                </ButtonGroup>
                                            </TableCell>
                                            <TableCell> 
                                            <Button  variant="contained"
                            className={classes.smMargin} onClick={handleMenuClose}>Show blood Donors </Button>
                                            </TableCell>
                                        </TableRow>)
                                    })
                                }
                                
                                <TablePagination
        rowsPerPageOptions={[2, 25, 100]}
        component="div"
        count="3"
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
        </FadeTransform>
        
        </div>
       </div>
    );
}

const mapStateToProps = state => ({
    dCandidateList: state.BloodPatient.list
})

const mapActionToProps = {
    fetchAllDCandidates: actions.fetchAll,
    deleteDCandidate: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(BloodPatients));