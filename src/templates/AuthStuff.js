import React, { useState } from 'react';
import AuthForm from './AuthForm';
import SignInForm from './SignInForm';
import '../AuthStuff.css';

function AuthStuff() {
    const [showSignInForm, setShowSignInForm] = useState('');

    const toggleForm = () => {
        setShowSignInForm(value => !value);
    };

    return (
        <div className="auth-container">
            <div className="form-div">
                {showSignInForm ? <SignInForm /> : <AuthForm />}
                <p className="toggle-link" onClick={toggleForm}>{showSignInForm ? 'Already registered? Login here.' : 'Not registered?'}</p>
            </div>
        </div>
    );
}

export default AuthStuff;
