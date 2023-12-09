import React, { useContext/*, useState */ } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyType = () => {
    const { dispatch } = useContext(AppContext);

    //const [type, setCurrencyType] = useState('');

    const submitEvent = () => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: document.getElementById('inputGroupSelect03').value,
        });
    }

    return (
        <select className="alert alert-success" id="inputGroupSelect03" onChange={submitEvent}>
            <option defaultValue>Currency</option>
            <option value="$" name="dollar">$ Dollar</option>
            <option value="£" name="pound">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="rupee">₹ Rupee</option>
        </select>
    );
    };

export default CurrencyType;