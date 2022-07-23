import React from "react";
import "./ExpenceForm.css";

const ExpenceForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text"></input>
        </div>

        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="Date" min="2019-01-01" max="2022-12-31"></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenceForm;