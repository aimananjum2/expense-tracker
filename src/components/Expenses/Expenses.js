import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("#");

  const filterHandler = (filterval) => {
    //console.log(filterval);
    setSelectedFilter(filterval);
  };
  const filteredYears = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedFilter} onFilter={filterHandler} />
      <ExpensesChart expenses={filteredYears}/>
      <ExpensesList
        completeList={props.expenses}
        selected={selectedFilter}
        items={filteredYears}
      />
      {/* { props.expenses.map((expense) =>
      <ExpenseItem
        key = {expense.id}
        title = {expense.title}
        price = {expense.amount}
        date = {expense.date}
      />
      )} */}
      {/* {
        (filteredYears.length===0)?(<p>No expense found</p>):(
          filteredYears.map((expense) =>
        <ExpenseItem
          key = {expense.id}
          title = {expense.title}
          price = {expense.amount}
          date = {expense.date}
        />
        ))
      } */}
      {/* {
        filteredYears.length===0 && <p>No expense found</p>
      }
      {
        filteredYears.length>0 && (filteredYears.map((expense) =>
        <ExpenseItem
          key = {expense.id}
          title = {expense.title}
          price = {expense.amount}
          date = {expense.date}
        />
        ))
      } */}
    </Card>
  );
}
export default Expenses;
