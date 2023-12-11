import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyType = () => {
    const { dispatch, currency } = useContext(AppContext);

    const changeCurrency = () => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: document.getElementById('inputGroupSelect03').value,
        });
    }

    return (
        <select className="alert alert-success" id="inputGroupSelect03" onChange={changeCurrency}>
            <option defaultValue>Currency {currency}</option>
            <option value="$" name="dollar">$ Dollar</option>
            <option value="£" name="pound">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="rupee">₹ Rupee</option>
        </select>
    );
    };

export default CurrencyType;
