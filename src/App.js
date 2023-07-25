import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id:1, title: "Car Insurance", amount: 294.67, date: new Date(2023, 5, 1) },
  { id:2, title: "A book", amount: 24.67, date: new Date(2021, 2, 1) },
  { id:3, title: "New TV", amount: 294.67, date: new Date(2021, 5, 1) },
  { id:4, title: "New Desk", amount: 294.67, date: new Date(2023, 5, 1) }
];

function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseDataHandler=(expense)=>{
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses];
    });
  };
  

  return (
    <div>
      
      <NewExpense onAddExpenseData={addExpenseDataHandler}/>

      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
