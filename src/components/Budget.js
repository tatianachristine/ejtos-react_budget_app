import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value below the spending");
        } else {
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: document.getElementById('budget_input').value,
        });
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" max="20000" id="budget_input" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

