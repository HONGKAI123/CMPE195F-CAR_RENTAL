import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {AuthContext} from '../components/authContext';
import Avatar from '@mui/material/Avatar';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function CustomNavbar(){
    let history = useHistory();
    const {auth, setAuth} = useContext(AuthContext);
    return(
        <Box >
            <AppBar position="static" sx={{background: '#333333'}}>
                <Toolbar 
                    sx={{display: 'flex',
                        justifyContent: 'space-between'}}>
                    <Typography variant="h6" component="div" sx={{fontWeight: 700}} onClick={()=> {history.push('./')}}>
                        <img src ='/logo3.png' alt='logo' width='55px' height='30px'/>
                        YIYI {''}Rental
                    </Typography>
                    <Box sx={{display:'flex'}}>
                        {(auth) && (
                            <Button color ="inherit" onClick={()=> {history.push('./carlist')}}>Car List</Button>
                        )} 
                        {(auth) ? (
                            <Avatar sx={{ml: 2, background: '#B0ABCA'}}>
                                <PersonOutlineIcon />
                            </Avatar>
                        ) : (
                        <React.Fragment>
                            <Button color="inherit" onClick={() => {history.push('/login')}}>Login</Button>
                            <Button onClick={() => {history.push('/register')}}
                                sx={{background: '#7E80DF', color: '#FFFFFF', ml: 3}}>
                                Register
                            </Button>
                        </React.Fragment>)}
                        
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
    
}