import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenceForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpensedData) => {
    const expenseData = {
      ...enteredExpensedData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

const startEditingHandler = () => {
  setIsEditing(true)
};
const stopEditingHandler = () => {
  setIsEditing (false)
}

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
