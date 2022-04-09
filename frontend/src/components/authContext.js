import React, {useState, useEffect, createContext} from 'react';

export const AuthContext = createContext({
    auth: false,
    setAuth: () => {}
});

export function AuthProvider(props){
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        let loginValue = localStorage.getItem('login');
        console.log('testing', loginValue);
        if (loginValue !== null){
            loginValue = JSON.parse(loginValue);
            if(loginValue === true){
                console.log(loginValue);
                setAuth(true);
            }
        }
    }, [])

    const authValue = {
        auth, 
        setAuth
    };

    return(
        <AuthContext.Provider value={authValue}>
            {props.children}
        </AuthContext.Provider>
    )
}