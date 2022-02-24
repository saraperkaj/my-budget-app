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

  const transList = transactions.map((transaction, index) => {
    return <Transaction key={index} transaction={transaction} index={index} />;
  });

  //its money in and money out

  //this is how much someone has spent
  const transTotal = transactions
    .map((transaction) => Number(transaction.amount))
    .reduce((prev, current) => prev + current, 0);

  // transactions.reduce(
  //   (prev, current) => prev + current.amount,
  //   0
  // );

  // const divStyleGreen = {
  //   color: "green",
  // };

  // const divStyleRed = {
  //   color: "red",
  // };

  const total = () => {
    if (transTotal > 1000) {
      // console.log("green");
      return <span style={{ color: "green" }}>{transTotal}</span>;
    }
    if (transTotal <= 0) {
      // console.log("red");
      return <span style={{ color: "red" }}>{transTotal}</span>;
    }
    if (transTotal > 0 && transTotal < 1000) {
      // console.log("normal");
      return <span style={{ color: "white" }}>{transTotal}</span>;
    }
  };

  return (
    <>
      <div>How much you've saved: ${total()}</div>
      <ul>{transList}</ul>
    </>
  );
}

export default Transactions;
