import React from 'react'
import '../App.css' 

function List({ transactions }) {
  console.log(transactions)

  function handleDelete(id) {
    fetch(`https://bank-backend-drab.vercel.app/transactions/${id}`, {
      method: 'DELETE',
    })
     .then(res => res.json())
     .then(data => console.log('Transaction deleted:', data))
  }

  let listToDisplay = transactions.map((transaction, index) => {
    return (
      <div className="transaction-card" key={index}>
        <p><strong>Date:</strong> {transaction.date}</p>
        <p><strong>Amount:</strong> {transaction.amount}</p>
        <p><strong>Category:</strong> {transaction.category}</p>
        <p><strong>Description:</strong> {transaction.description}</p>
        <button onClick={() => handleDelete(transaction.id)}>Delete Transaction</button>
      </div>
    )
  });

  return (
    <>
    <h1 className='header'>Your Transactions</h1>
    <div className="transaction-list">
      {listToDisplay}
    </div>
    </>
  )
}

export default List;
