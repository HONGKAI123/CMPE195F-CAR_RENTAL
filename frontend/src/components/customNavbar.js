import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function CustomNavbar(){
    let history = useHistory();

    return(
        <Box >
            <AppBar position="static" sx={{background: '#333333'}}>
                <Toolbar 
                    sx={{display: 'flex',
                        justifyContent: 'space-between'}}>
                    <Typography variant="h6" component="div" sx={{fontWeight: 700}}>
                        <img src ='/logo3.png' alt='logo' width='55px' height='30px'/>
                        YIYI {''}Rental
                    </Typography>
                    <Box>
                        <Button color="inherit" onClick={() => {history.push('/login')}}>Login</Button>
                        <Button onClick={() => {history.push('/register')}}
                            sx={{background: '#7E80DF', color: '#FFFFFF', ml: 3}}>
                            Register
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
    
}