import React from 'react'
import { useState } from 'react'
import './Core.css'

const Core = () => {

  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState('income');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
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
      setCategory('');
      setAmount('');
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
    <>
    {isAddPopupVisible && (
      <div className="popup">
        <label>
          <h2>Add Transaction</h2>
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
    <div className='div-grid'>
      <div className='card card1'>
        <h1>Core 1</h1>
      </div>
      <div className='card three-child-card card2'>
      <div className='sub-card spending'>
          <h1>Spending</h1>
        </div>
        <div className='sub-card expenses'>
          <h1>Income</h1>
        </div>
        <div className='sub-card add-button'>
          <button onClick={toggleAddPopup}>Add Transaction</button>
        </div>
      </div>
      <div className='card card3'>
        <h1>Core 3</h1>
      </div>
      <div className='card card4'>
      <h2>Expense</h2>
        {transactions
          .filter((t) => t.type === 'expense' && (!selectedCategory || t.category === selectedCategory))
          .map((t) => (
            <div key={t.id}>- {t.amount} ({t.category})</div>
          ))}
      </div>
      <div className='card card5'>
      <h2>Income</h2>
        {transactions
          .filter((t) => t.type === 'income' && (!selectedCategory || t.category === selectedCategory))
          .map((t) => (
            <div key={t.id}>+ {t.amount} ({t.category})</div>
          ))}
      </div>
      <div className='card card6'>
        <h1>Core 6</h1>
      </div>
      <div className='card card7'>
        <h1>Core 7</h1>
      </div>

    </div>
    </>
  )
}

export default Core
