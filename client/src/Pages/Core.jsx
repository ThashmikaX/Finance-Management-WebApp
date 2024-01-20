import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./Core.css";

const Core = () => {
  const [transaction, setTransaction] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const [isAddPopupVisible, setAddPopupVisibility] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setTransactions(response.data);
    });
  }, []);

  const expenses = transactions.filter(
    (transaction1) => transaction1.TransactionType === "Expense"
  );

  const toggleAddPopup = () => {
    setAddPopupVisibility(!isAddPopupVisible);
  };

  const handleSubmit = () => {
    Axios.post("http://localhost:3001/createUser", {
        Transaction: transaction,
        TransactionType: transactionType,
        Category: category,
        Amount: amount,
      })
      .then((response) => {
        alert("The user is successfully added");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {isAddPopupVisible && (
        // In your form
        <form className="popup">
          <label>
            <h2>Add Transaction</h2>
            Transaction:
            <input
              type="text"
              onChange={(e) => setTransaction(e.target.value)}
            />
            <br />
            <br />
            Transaction Type:
            <select onChange={(e) => setTransactionType(e.target.value)}>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </label>
          <br />
          <label>
            Catagory:
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="Food">Food</option>
              <option value="Living">Living</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Transportation">Transportation</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Other">Other</option>
              <option value="Wage">Wage</option>
              <option value="Gift">Gift</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <br />
          <label>
            Amount:
            <input type="number" onChange={(e) => setAmount(e.target.value)} />
          </label>
          <br />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      )}
      <div className="div-grid">
        <div className="card card1">
          <h1>Core 1</h1>
        </div>
        <div className="card three-child-card card2">
          <div className="sub-card spending">
            <h1>Spending</h1>
          </div>
          <div className="sub-card expenses">
            <h1>Income</h1>
          </div>
          <div className="sub-card add-button">
            <button onClick={toggleAddPopup}>Add Transaction</button>
          </div>
        </div>
        <div className="card card3">
          <h1>Core 3</h1>
        </div>
        <div className="card card4">
          <h1>Expense List</h1>
          {expenses.map((expense, index) => (
            <div key={index}>
              <p>{expense.Transaction}</p>
              <p>{expense.TransactionType}</p>
              <p>{expense.Catagory}</p>
              <p>{expense.Amount}</p>
            </div>
          ))}
        </div>
        <div className="card card5">
          <h2>Income List</h2>
        </div>
        <div className="card card6">
          <h1>Core 6</h1>
        </div>
        <div className="card card7">
          <h1>Core 7</h1>
        </div>
      </div>
    </>
  );
};

export default Core;
