import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./Core.css";
import Card from "../Components/card";

function Core() {
  const [transaction, setTransaction] = useState("");
  const [transactionType, setTransactionType] = useState("Expense");
  const [category, setCategory] = useState("Food");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit called");
    console.log("transaction " + transaction);
    console.log("transactionType " + transactionType);
    console.log("category " + category);
    console.log("amount " + amount);
    Axios.post("http://localhost:3001/createUser", {
      Transaction: transaction,
      TransactionType: transactionType,
      Catagory: category,
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
        <form className="popup" onSubmit={handleSubmit}>
          <label>
            <h2>Add Transaction</h2>
            Transaction:
            <input
              type="text"
              onChange={(e) => {
                setTransaction(e.target.value);
              }}
            />
            <br />
            <br />
            Transaction Type:
            <select
              value={transactionType}
              onChange={(e) => {
                setTransactionType(e.target.value);
                console.log(e.target.value);
              }}
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </label>
          <br />
          <label>
            Catagory:
            <select
              value={category}
              defaultValue="Food"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
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
            <input
              type="number"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
      <div className="div-grid">
        <div className="card card1">
          <Card className="greenGradient">
            <h1>Card</h1>
          </Card>
        </div>
        <div className="card three-child-card card2">
          <Card className="grayGradient">
            <h1>Card</h1>
          </Card>
          <Card className="grayGradient">
            <h1>Card</h1>
          </Card>
          <button onClick={toggleAddPopup} className="add-button">
            Add Transaction
          </button>
        </div>
        <div className="card card3">
          <Card className="grayGradient">
            <h1>Card</h1>
          </Card>
        </div>
        <div className="card card4 expense-list">
          <Card className="grayGradient">
            <h2>Expense List</h2>
            {expenses.map((expense, index) => (
              <div key={index}>
                <p>{expense.Transaction}</p>
                <p>{expense.TransactionType}</p>
                <p>{expense.Catagory}</p>
                <p>{expense.Amount}</p>
              </div>
            ))}
          </Card>
        </div>
        <div className="card card5">
          <Card className="grayGradient">
            <h1>Card</h1>
          </Card>
        </div>
        <div className="card card6">
          <button onClick={toggleAddPopup} className="add-button">
            View All Spending
          </button>
        </div>
        <div className="card card7">
          <button onClick={toggleAddPopup} className="add-button">
            View All Incomes
          </button>
        </div>
      </div>
    </>
  );
}

export default Core;
