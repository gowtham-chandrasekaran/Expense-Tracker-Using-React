import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredExpense,setEnteredExpense] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const expenseChangeHandler = (event) => {
        setEnteredExpense(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault(); //prevents reload
        const enteredData = {
            title:enteredTitle,
            amount:+enteredExpense,
            date:new Date(enteredDate),
            id: Math.random().toString()
        };
        props.onSaveExpenseData(enteredData);
        setEnteredTitle('');
        setEnteredExpense('');
        setEnteredDate('');
    };


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>
                        Title
                    </label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} required></input>
                </div>
                <div className="new-expense__control">
                    <label>
                        Expense
                    </label>
                    <input type="number" value={enteredExpense} min="0.01" step="0.01" onChange={expenseChangeHandler} required></input>
                </div>
                <div className="new-expense__control">
                    <label>
                        Date
                    </label>
                    <input type="date" value={enteredDate} min="2021-01-01" max="2031-01-01" onChange={dateChangeHandler} required></input>
                </div>
            </div>
            <div className="new_expense__actions">
                <button type="submit">Add Expense</button>
                <button type="button" onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default ExpenseForm;