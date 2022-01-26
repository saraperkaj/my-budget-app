function Transaction({ transaction, index }) {
  return (
    <div>
      <p>{transaction.date}</p>
      <a href={`/transactions/${index}`} target="_blank" rel="noreferrer">
        {transaction.itemName}
      </a>
      <p>${transaction.amount}</p>
    </div>
  );
}

export default Transaction;
