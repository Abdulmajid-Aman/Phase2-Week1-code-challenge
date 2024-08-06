import React from 'react'
import '../App.css' 

function List({ transactions }) {
  let listToDisplay = transactions.map(transaction => {
    return (
      <div className="transaction-card" key={transaction.id}>
        <p><strong>Date:</strong> {transaction.date}</p>
        <p><strong>Amount:</strong> {transaction.amount}</p>
        <p><strong>Category:</strong> {transaction.category}</p>
        <p><strong>Description:</strong> {transaction.description}</p>
      </div>
    )
  });

  return (
    <div className="transaction-list">
      {listToDisplay}
    </div>
  )
}

export default List;
