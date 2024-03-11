import React from 'react';
import AuthPage from './AuthPage';
import MainPage from './MainPage';
import { useSelector } from 'react-redux';

export function SwitchingPage() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    
    return (
        <div>
            {isAuthenticated ? <MainPage /> : <AuthPage />}
        </div>
    )

    // return (
    //     <MainPage/>
    // )
}

export default SwitchingPage;
