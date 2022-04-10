import React, {useEffect, useContext} from 'react';
import Default from '../components/Default';
import {AuthContext} from '../components/authContext';
import { useHistory } from "react-router-dom";
import { Container } from '@mui/material';
import './CarList.css';
import 'animate.css';
export default function CarList(){
    const {auth, setAuth} = useContext(AuthContext);
    let history = useHistory();

    useEffect(() => {
        if(auth === false){
            history.push('/');
        }
    }, [])

    return (
        <Default>
            <h1 className='animate__animated animate__bounce p-5'> <span>Get our rental cars</span></h1>
            <Container maxWidth = 'lg'>
                <h2 className='kennth1'>Enconmy</h2>

                








            </Container>

                






            
        </Default>
    );
}