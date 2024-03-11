import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './dataSlice';

const Data = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) {
        console.log('Loading');
    }

    if (error) {
        console.log('Error');
    }

    return (
        data?.map((n) => (
            <tr key={n.id}>
                <td>{n.x}</td>
                <td>{n.y}</td>
                <td>{n.r}</td>
                <td>{n.status ? 'Hit' : 'Miss'}</td>
            </tr>
        ))
    );
};

export default Data;
