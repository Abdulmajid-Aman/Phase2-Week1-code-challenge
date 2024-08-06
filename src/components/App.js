import React, { useEffect, useState } from 'react';
import List from './List';
import Form from './Form';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState(null);

  function dataPassedBack(value) {
    setNewTransaction(value);
    console.log(value);
  }

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.error("Error fetching transactions:", err));
  }, []);

  useEffect(() => {
    if (newTransaction) {
      setTransactions(prevTransactions => [newTransaction, ...prevTransactions]);
      setNewTransaction(null);
    }
  }, [newTransaction]);

 let nextId = Math.floor(Math.random() * 1000)

  

  return (
    <> 
      <List transactions={transactions} />
      <Form dataPassedBack={dataPassedBack} nextId={nextId} />
    </>
  );
}

export default App;
