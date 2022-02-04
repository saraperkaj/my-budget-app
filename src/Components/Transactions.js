import axios from "axios";
import { useEffect, useState } from "react";
import Transaction from "./Transaction";

function Transactions() {
  const [transactions, setTrans] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/transactions`)
      .then((response) => {
        setTrans(response.data);
      })
      .catch((event) => console.log("catch", event));
  }, []);

  // if (response.data === null) {
  //   return {};
  // }

  const transTotal = transactions.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  const transList = transactions.map((transaction, index) => {
    return <Transaction key={index} transaction={transaction} index={index} />;
  });

  return (
    <>
      <div>How much you've spent: ${transTotal}</div>
      <ul>{transList}</ul>
    </>
  );
}

export default Transactions;
