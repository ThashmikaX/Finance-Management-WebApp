import React, { useState } from "react";
import "./Core.css"; // Import the CSS file for styling

const FinanceTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState("income");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isAddPopupVisible, setAddPopupVisibility] = useState(false);

  const handleAddTransaction = () => {
    if (category && amount) {
      const newTransaction = {
        id: Date.now(),
        type: transactionType,
        category,
        amount: parseFloat(amount),
      };

      setTransactions([...transactions, newTransaction]);
      setCategory("");
      setAmount("");
      setAddPopupVisibility(false); // Close the pop-up after adding the transaction
    }
  };

  const toggleAddPopup = () => {
    setAddPopupVisibility(!isAddPopupVisible);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <h1>Personal Finance Tracker</h1>
      <button onClick={toggleAddPopup}>Add Transaction</button>

      {isAddPopupVisible && (
        <div className="popup">
          <label>
            Transaction Type:
            <select
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </label>
          <br />
          <label>
            Category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <br />
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleAddTransaction}>Add Transaction</button>
        </div>
      )}

      <div>
        <h2>Income</h2>
        {transactions
          .filter(
            (t) =>
              t.type === "income" &&
              (!selectedCategory || t.category === selectedCategory)
          )
          .map((t) => (
            <div key={t.id}>
              + {t.amount} ({t.category})
            </div>
          ))}
      </div>
      <div>
        <h2>Expense</h2>
        {transactions
          .filter(
            (t) =>
              t.type === "expense" &&
              (!selectedCategory || t.category === selectedCategory)
          )
          .map((t) => (
            <div key={t.id}>
              - {t.amount} ({t.category})
            </div>
          ))}
      </div>
      <div>
        <h2>Transactions by Category</h2>
        <label>
          Select Category:
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            {[...new Set(transactions.map((t) => t.category))].map(
              (category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              )
            )}
          </select>
        </label>
        <div>
          <h3>Income by Category</h3>
          {transactions
            .filter(
              (t) =>
                t.type === "income" &&
                (!selectedCategory || t.category === selectedCategory)
            )
            .map((t) => (
              <div key={t.id}>
                + {t.amount} ({t.category})
              </div>
            ))}
        </div>
        <div>
          <h3>Expense by Category</h3>
          {transactions
            .filter(
              (t) =>
                t.type === "expense" &&
                (!selectedCategory || t.category === selectedCategory)
            )
            .map((t) => (
              <div key={t.id}>
                - {t.amount} ({t.category})
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FinanceTracker;
