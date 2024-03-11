import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {clearPoints} from "../script/drawer";
import {showError} from "../script/warner";

const url = 'http://localhost:32223/back4-1.0-SNAPSHOT/api/';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const ownerId = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');

    const response = await fetch(url + `data/get?owner_id=${ownerId}`, {
        method: 'POST',
        headers: {
            Authorization: token,
        },
    });

    if (!response.ok) {
        showError('Failed to fetch data');
    }

    return await response.json();
});

export const sendData = createAsyncThunk('data/sendData', async ({ x, y, r }) => {
    const ownerId = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');

    const response = await fetch(
        url + `data/add?x=${x}&y=${y}&r=${r}&owner_id=${ownerId}`,
        {
            method: 'POST',
            headers: {
                Authorization: token,
            },
        }
    );

    if (!response.ok) {
        showError('Failed to send data');
    }

    return await response.json();
});

export const clearData = createAsyncThunk('data/clearData', async () => {
    const ownerId = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');

    const response = await fetch(url + `data/clear?owner_id=${ownerId}`, {
        method: 'POST',
        headers: {
            Authorization: token,
        },
    });

    if (!response.ok) {
        showError('Failed to clear data');
    }

    return null;
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        loading: false,
        error: null,
        sendingData: false,
        sendDataError: null,
        clearingData: false,
        clearDataError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(sendData.pending, (state) => {
                state.sendingData = true;
                state.sendDataError = null;
            })
            .addCase(sendData.fulfilled, (state, action) => {
                state.data = [action.payload, ...state.data];
                state.sendingData = false;
            })
            .addCase(sendData.rejected, (state, action) => {
                state.sendingData = false;
                state.sendDataError = action.error.message;
            })
            .addCase(clearData.pending, (state) => {
                state.clearingData = true;
                state.clearDataError = null;
            })
            .addCase(clearData.fulfilled, (state) => {
                state.data = [];
                clearPoints()
                state.clearingData = false;
            })
            .addCase(clearData.rejected, (state, action) => {
                state.clearingData = false;
                state.clearDataError = action.error.message;
            });
    },
});

export default dataSlice.reducer;
