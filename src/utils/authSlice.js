import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {showError} from "../script/warner";

const url = 'http://localhost:32223/back4-1.0-SNAPSHOT/api/';

export const login = createAsyncThunk('auth/login', async ({ username, password }, { dispatch }) => {
    try {
        const response = await fetch(url + 'auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        switch (response.status) {
            case 200:
                const data = await response.json();
                localStorage.setItem('token', data.at(0).token);
                localStorage.setItem('user_id', data.at(0).user_id);
                localStorage.setItem('isAuthenticated', 'true');

                dispatch(loginSuccess({ token: data.at(0).token, user_id: data.at(0).user_id }));
                return;

            case 401:
                showError('Wrong password');
                break
            case 400:
                showError('User not found');
                break
            case 500:
                showError('Server error, try again later');
                break
            default:
                showError('Failed to login');
                break
        }
    } catch (error) {
        showError(error.message);
        console.error(error.message);
    }
});

export const register = createAsyncThunk('auth/register', async ({ username, password }, { dispatch }) => {
    try {
        const response = await fetch(url + 'auth/register?username=', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        switch (response.status) {
            case 200:
                const data = await response.json();
                localStorage.setItem('token', data.at(0).token);
                localStorage.setItem('user_id', data.at(0).user_id);
                localStorage.setItem('isAuthenticated', 'true');

                dispatch(loginSuccess({ token: data.at(0).token, user_id: data.at(0).user_id }));
                return;

            case 400:
                showError('Username is already taken');
                break
            case 500:
                showError('Server error, try again later');
                break
            default:
                showError('Failed to register');
                break
        }
    } catch (error) {
        showError(error.message);
        console.error(error.message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        token: null,
        user_id: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user_id = action.payload.user_id;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user_id = null;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
