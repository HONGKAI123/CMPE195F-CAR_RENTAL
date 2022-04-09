import React, {useEffect, useContext} from 'react';
import Default from '../components/Default';
import {AuthContext} from '../components/authContext';
import { useHistory } from "react-router-dom";

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
            <h1>Car List</h1>
        </Default>
    );
}