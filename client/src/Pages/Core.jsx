import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./Core.css";
import Card from "../Components/Card";
import PopupForm from "../Components/PopupForm";

function Core() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleFormSubmit = (transaction, transactionType, category, amount) => {
    // Do something with transaction and transactionType
    console.log("handleSubmit called");
    console.log("transaction " + transaction);
    console.log("transactionType " + transactionType);
    console.log("category " + category);
    console.log("amount " + amount);
    Axios.post("https://finance-management-web-app-backend.vercel.app/createUser", {
      Transaction: transaction,
      TransactionType: transactionType,
      Catagory: category,
      Amount: amount,
    })
      .then((response) => {
        // After the transaction is added, re-fetch the transactions
        Axios.get("https://finance-management-web-app-backend.vercel.app/getUsers").then((response) => {
          setTransactions(response.data);
        });
        setAddPopupVisibility(false);
      })
      .catch((error) => console.error(error));
  };

  const [isAddPopupVisible, setAddPopupVisibility] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    Axios.get("https://finance-management-web-app-backend.vercel.app/getUsers").then((response) => {
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

  return (
    <>
      <PopupForm
        onSubmit={handleFormSubmit}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
      <div className="div-grid">
        <div className="card card1">
          <Card className="greenGradient h-100 wallet-card">
            <p
              style={{ fontSize: "60px", fontWeight: 600 }}
              className="wallet-card"
            >
              <span style={{ fontWeight: 200 }}>Wallet</span> Rs.{" "}
              {total.toLocaleString()}
            </p>
          </Card>
        </div>
        <div className="card three-child-card card2 h-100">
          <Card className="grayGradient h-100">
            <p style={{ fontSize: "20px" }}>Spendings</p>
            <p style={{ fontSize: "35px", fontWeight: 800 }}>
              Rs. {sumOfExpenses.toLocaleString()}
            </p>
          </Card>
          <Card className="grayGradient h-100">
            <p style={{ fontSize: "20px" }}>Incomes</p>
            <p style={{ fontSize: "35px", fontWeight: 800 }}>
              Rs. {sumOfIncomes.toLocaleString()}
            </p>
          </Card>
          <button onClick={() => setIsPopupOpen(true)} className="add-button">
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
                <div className="expense-list-elem1">
                  <p>{expense.Transaction}</p>
                </div>
                <div className="expense-list-elem1">
                  <p>{expense.Catagory}</p>
                </div>
                <div className="expense-list-elem2">
                  <p className="amount">Rs. {expense.Amount.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </Card>
        </div>
        <div className="card card5">
          <Card className="grayGradient h-100">
            <h1>Daily tips</h1>
            <p>Take advantage of budgeting resources.</p>
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
