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

  const expensesByCategory = transactions.reduce((acc, transaction) => {
    if (transaction.TransactionType === "Expense") {
      if (!acc[transaction.Catagory]) {
        acc[transaction.Catagory] = 0;
      }
      acc[transaction.Catagory] += transaction.Amount;
    }
    return acc;
  }, {});

  const sumOfExpenses = transactions.reduce((acc, transaction) => {
    if (transaction.TransactionType === "Expense") {
      acc += transaction.Amount;
    }
    return acc;
  }, 0);

  const sumOfIncomes = transactions.reduce((acc, transaction) => {
    if (transaction.TransactionType === "Income") {
      acc += transaction.Amount;
    }
    return acc;
  }, 0);

  const total = sumOfIncomes - sumOfExpenses;

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
        // After the transaction is added, re-fetch the transactions
        Axios.get("http://localhost:3001/getUsers").then((response) => {
          setTransactions(response.data);
        });
        setAddPopupVisibility(false);
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
          <Card className="greenGradient h-100 wallet-card">
            <p style={{ fontSize: "60px", fontWeight: 600 }}>
              <span style={{ fontWeight: 200 }}>Wallet</span> Rs.{" "}
              {total.toLocaleString()}
            </p>
          </Card>
        </div>
        <div className="card three-child-card card2">
          <Card className="grayGradient">
            <p style={{ fontSize: "20px" }}>Spendings</p>
            <p style={{ fontSize: "35px", fontWeight: 800 }}>
              Rs. {sumOfExpenses.toLocaleString()}
            </p>
          </Card>
          <Card className="grayGradient">
            <p style={{ fontSize: "20px" }}>Incomes</p>
            <p style={{ fontSize: "35px", fontWeight: 800 }}>
              Rs. {sumOfIncomes.toLocaleString()}
            </p>
          </Card>
          <button onClick={toggleAddPopup} className="add-button">
            Add Transaction
          </button>
        </div>
        <div className="card card3 spending-by-catagory">
          <Card className="grayGradient h-100">
            <h1>Spending by Category</h1>
            {Object.entries(expensesByCategory).map(([Catagory, amount]) => (
              <div key={Catagory} className="expense-list-elem">
                <p>{Catagory}</p>
                <p className="amount">Rs. {amount.toLocaleString()}</p>
              </div>
            ))}
          </Card>
        </div>
        <div className="card card4 expense-list">
          <Card className="grayGradient h-100">
            <h2>Expense List</h2>
            {expenses.map((expense, index) => (
              <div key={index} className="expense-list-elem">
                <p>{expense.Transaction}</p>
                <p>{expense.Catagory}</p>
                <p className="amount">Rs. {expense.Amount.toLocaleString()}</p>
              </div>
            ))}
          </Card>
        </div>
        <div className="card card5">
          <Card className="grayGradient h-100">
            <h1>Daily tips</h1>
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
