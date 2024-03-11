import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { register } from '../utils/authSlice';

function SignInForm() {
    const dispatch = useDispatch();
    const { register: formRegister, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { username, password } = data;
        dispatch(register({ username, password }));
    };

    return (
        <form id="user-input" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                id="username"
                name="username"
                {...formRegister('username', { required: true })}
            />
            {errors.username && <p>Username is required.</p>}

            <label htmlFor="password">Password: </label>
            <input
                type="password"
                id="password"
                name="password"
                {...formRegister('password', { required: true, minLength: 8 })}
            />
            {errors.password && errors.password.type === 'required' && (
                <p>Password is required.</p>
            )}
            {errors.password && errors.password.type === 'minLength' && (
                <p>Password must be at least 8 characters long.</p>
            )}

            <input type="submit" value="Sign in" id="submit-button" />
        </form>
    );
}

export default SignInForm;
