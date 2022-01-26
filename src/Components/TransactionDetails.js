import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  let { index } = useParams();

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
        console.log(response.data);
      })
      .catch(() => {
        navigate("/transactions");
      });
  }, [URL]);

  const handleDelete = () => {
    axios
      .delete(`${URL}/transactions/${index}`)
      .then(() => navigate("/transactions"));
  };

  return (
    <div>
      <div className="detail-container">
        <p>
          {transaction.date}
          <br />
          {transaction.itemName}
          <br />
          {transaction.amount}
        </p>
        <p>
          {transaction.from}
          <br />
          {transaction.category}
        </p>
      </div>
      <div className="buttons">
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetails;
