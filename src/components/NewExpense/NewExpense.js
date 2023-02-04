import './NewExpense.css';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing,setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData
        };
        props.data(expenseData);
        setIsEditing(false);
    };
    const clickHandler = () => {
        setIsEditing(true);
    };
    const cancelHandler = () => {
        setIsEditing(false);
    };
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={clickHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>}
        </div>
    );
};

export default NewExpense;