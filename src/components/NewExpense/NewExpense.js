import React, {useState} from "react";
import "./NewExpsense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpsense = (props) => {
  const [isEditing, setIsEditing] = useState(false);  
  
  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () =>  setIsEditing(false);
  
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }
  

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}
       onCancel ={stopEditingHandler} />}
    </div>
  );
};

export default NewExpsense;
