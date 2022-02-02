import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <div>
      <p>{transaction.date}</p>
      <Link to={`/transactions/${index}`}>{transaction.itemName}</Link>
      <p>${transaction.amount}</p>
    </div>
  );
}

export default Transaction;
