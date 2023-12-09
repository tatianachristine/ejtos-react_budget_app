//import React, { useContext, useState } from 'react';
//import { AppContext } from '../context/AppContext';

const CurrencyType = () => {

    return (
        <div className="alert alert-success">
            <select className="custom-select" id="inputGroupSelect03">
                <option defaultValue>Currency</option>
                <option value="Dollar" name="dollar"> Dollar</option>
                <option value="Pound" name="pound">Pound</option>
                <option value="Euro" name="euro">Euro</option>
                <option value="Ruppee" name="ruppee">Ruppee</option>
            </select>
        </div>
    );
    };

export default CurrencyType;