import React, { useRef, useState, useEffect } from "react";
import "./PopupForm.css";

function PopupForm({ onSubmit, isOpen, onClose }) {
  const dialogRef = useRef();

  const [transaction, setTransaction] = useState("");
  const [transactionType, setTransactionType] = useState("Expense");
  const [category, setCategory] = useState("Food");
  const [amount, setAmount] = useState(0);

  const handleSubmit = () => {
    onSubmit(transaction, transactionType, category, amount);
  };

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else if (dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialogElement = dialogRef.current;

    const handleCancel = () => {
      if (onClose) {
        onClose();
      }
    };

    if (dialogElement) {
      dialogElement.addEventListener("cancel", handleCancel);
    }

    return () => {
      if (dialogElement) {
        dialogElement.removeEventListener("cancel", handleCancel);
      }
    };
  }, [onClose]);

  const closeDialog = () => {
    if (onClose) {
      onClose();
      handleSubmit();
    }
  };

  return (
    <dialog ref={dialogRef} data-modal className="dialog-form">
      <h2>Add Transaction</h2>
      <label>
        <p>Transaction:</p>
        <input
          type="text"
          className="text-input"
          onChange={(e) => {
            setTransaction(e.target.value);
          }}
        />
        <p>Transaction Type:</p>
        <select
          className="select-input"
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
        <p>Catagory:</p>

        <select
          className="select-input"
          value={category}
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
        <p>Amount:</p>

        <input
          type="number"
          className="text-input"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </label>
      <br />
      <div className="buttons">
        <button type="button" onClick={closeDialog} className="button cancel">
          Cancel
        </button>
        <button type="submit" onClick={closeDialog} className="button submit">
          Submit
        </button>
      </div>
    </dialog>
  );
}

export default PopupForm;
