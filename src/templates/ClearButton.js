import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearData} from '../utils/dataSlice';

const ClearButton = () => {
    const dispatch = useDispatch();
    const hasData = useSelector((state) => state.data.data?.length !== 0);

    const handleClear = (event) => {
        event.preventDefault();
        dispatch(clearData());
    };

    return (
            <form className="form_margin" onSubmit={handleClear}>
                <div id="clear-table-container" className="select-container margin">
                    <input type="submit" value="Clear table" id="clear-table"/>
                </div>
            </form>
    );
};

export default ClearButton;
