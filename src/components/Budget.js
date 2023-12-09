import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ReactDOM from 'react-dom/client';
import Remaining from './Remaining';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value below the spending");
        } else {
        setNewBudget(event.target.value);
        ReactDOM.render(<Remaining />, document.getElementById("Remaining"))
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
