import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props)=>{
    const [isEditing,setIsEditing] = useState(false);
    const saveExpenseDatehandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpenseData(expenseData);
        //console.log(expenseData);
    }
    const startEditing =()=>{
        setIsEditing(true);
    }
    const stopEditing=()=>{
        setIsEditing(false);
    }
    return (<div className="new-expense">
        {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDatehandler} onStopEditing={stopEditing}/>}
    </div>);
};
export default NewExpense;