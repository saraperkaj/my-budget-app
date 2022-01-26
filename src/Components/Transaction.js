function Transaction({ transaction, index }) {
  return (
    <div>
      {transaction.date}
      <a href={`/transactions/${index}`} target="_blank" rel="noreferrer">
        {transaction.itemName}
      </a>
      {transaction.amount}
    </div>
  );
}

export default Transaction;
