import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function TransactionNewForm() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [transaction, setTrans] = useState({
    itemName: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${URL}/transactions`, transaction)
      .then(() => navigate(`/transactions`));
  };

  const handleNumberChange = (event) => {
    setTrans({
      ...transaction,
      [event.target.id]: Number(event.target.value),
    });
  };

  const handleTextChange = (event) => {
    setTrans({ ...transaction, [event.target.id]: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="edit">
        <div className="newForm">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            value={transaction.date}
            type="text"
            onChange={handleTextChange}
            placeholder="zero"
            required
          />

          <label htmlFor="itemName">What your $ is going towards</label>
          <input
            id="itemName"
            name="itemName"
            value={transaction.itemName}
            type="text"
            onChange={handleTextChange}
            placeholder="Chipotle? Shoes? Tell us here..."
            required
          />

          <label htmlFor="amount">$Amount$</label>
          <input
            id="amount"
            name="number"
            value={transaction.amount}
            type="text"
            onChange={handleNumberChange}
            placeholder="1000.00"
            required
          />

          <label htmlFor="from">Where'd this $ come from? 🤔</label>
          <input
            id="from"
            name="from"
            value={transaction.from}
            type="text"
            onChange={handleTextChange}
            placeholder="Did you use this money from your check? From the 20 you got for your Birthday? Where's it from???"
          />

          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            value={transaction.category}
            type="text"
            onChange={handleTextChange}
            placeholder="Food, Hygiene, Necessities..."
          />
          <button type="submit">submit</button>
          <div>
            <Link to={`/transactions/`}>
              <button>Nevermind!</button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default TransactionNewForm;
