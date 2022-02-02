import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TransactionEditForm() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  let { index } = useParams();

  const [transaction, setTransaction] = useState({
    itemName: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });

  useEffect(() => {
    axios.get(`${URL}/transactions/${index}`).then((response) => {
      setTransaction({
        itemName: response.data.itemName,
        amount: response.data.amount,
        date: response.data.date,
        from: response.data.from,
        category: response.data.category,
      });
    });
  }, [URL, index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/transactions/${index}`, transaction)
      .then(() => navigate(`/transactions/`));
  };

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.id]: Number(event.target.value),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="Date"
          required
        />

        <label htmlFor="itemName">Item Name:</label>
        <input
          id="itemName"
          name="itemName"
          value={transaction.itemName}
          type="text"
          onChange={handleTextChange}
          placeholder="Chipotle? Shoes? Tell us here..."
          required
        />

        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          name="amount"
          value={transaction.amount}
          type="text"
          onChange={handleNumberChange}
          placeholder="1000.00"
          required
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          name="from"
          value={transaction.from}
          type="from"
          onChange={handleTextChange}
          placeholder="Did you use this money from your check? From the 20 you got for your Birthday? Where's it from???"
          required
        />

        <label htmlFor="category">Category:</label>
        <input
          id="category"
          name="category"
          value={transaction.category}
          type="category"
          onChange={handleTextChange}
          placeholder="Food, Hygiene, Necessities..."
          required
        />

        <input type="submit" />
      </form>
    </>
  );
}

export default TransactionEditForm;
