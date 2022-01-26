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
        console.log(response);
        console.log(response.data);
        setTrans(response.data);
      })
      .catch((event) => console.log("catch", event));
  }, []);

  //   if (!transactions) {
  //     return null;
  //   }

  const transList = transactions.map((transaction, index) => {
    return <Transaction key={index} transaction={transaction} index={index} />;
  });

  return (
    <div className="transactions">
      <ul>{transList}</ul>
    </div>
  );
}

export default Transactions;
