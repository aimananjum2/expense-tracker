import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props){
    let expensesContent = <h2 className='expenses-list__fallback'>Found no expenses</h2>
  // console.log(selectedFilter);
  if(props.selected==="#"){
    expensesContent = props.completeList.map((expense) =>
    <ExpenseItem
      key = {expense.id}
      title = {expense.title}
      price = {expense.amount}
      date = {expense.date}
    />
    )
  }
  if(props.items.length>0){
    expensesContent = props.items.map((expense) =>
    <ExpenseItem
      key = {expense.id}
      title = {expense.title}
      price = {expense.amount}
      date = {expense.date}
    />
    )
  }
  return expensesContent;
}
export default ExpensesList;