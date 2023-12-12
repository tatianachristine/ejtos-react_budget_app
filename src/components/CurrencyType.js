import React, { useContext } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const CurrencyType = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = () => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: document.getElementById('inputGroupSelect03').value,
        });
    }

    /*const customStyles = {
        option: (defaultStyles, state) => ({
          ...defaultStyles,
          color: state.isSelected ? "#212529" : "#fff",
          backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
        }),
    
        control: (defaultStyles) => ({
          ...defaultStyles,
          backgroundColor: "#212529",
          padding: "10px",
          border: "none",
          boxShadow: "none",
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
      };
      
      https://blog.logrocket.com/getting-started-react-select/*/

/*function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Currency (£ Pound)
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item value = "$" href="dollar">$ Dollar</Dropdown.Item>
        <Dropdown.Item value="£" href="pound">£ Pound</Dropdown.Item>
        <Dropdown.Item value="€" href="euro">€ Euro</Dropdown.Item>
        <Dropdown.Item value="₹" href="rupee">₹ Rupee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;*/
    return (
        <select className="alert alert-success" id="inputGroupSelect03" onChange={changeCurrency}>
            <option defaultValue>Currency (£ Pound)</option>
            <option value="$" name="dollar">$ Dollar</option>
            <option value="£" name="pound">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="rupee">₹ Rupee</option>
        </select>
    );
    };

export default CurrencyType;

