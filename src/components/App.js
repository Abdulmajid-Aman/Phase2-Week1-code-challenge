import React, { useEffect, useState } from 'react';
import List from './List';
import Form from './Form';
import '../App.css'; 

function App() {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState('');
  const [searchTransactions, setSearchTransactions] = useState([]);
  const [text, setText] = useState(true);
  const [display, setDisplay] = useState(true);

  function handleClick() {
    setText(!text);
    setDisplay(!display);
  }



  function handleFilter(e) {
    setFilteredTransactions(e.target.value);
  }

  function dataPassedBack(value) {
    setNewTransaction(value);
    console.log(value);
  }

  useEffect(() => {
    fetch('https://bank-backend-drab.vercel.app/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.error("Error fetching transactions:", err));
  }, []);

  useEffect(() => {
    if (newTransaction) {
      setTransactions(transactions => [newTransaction, ...transactions]);
      setNewTransaction(null);
    }
  }, [newTransaction]);

  useEffect(() => {
    if (filteredTransactions) {
      const searchedItem = transactions.filter(transaction => 
        transaction.description.toLowerCase().includes(filteredTransactions.toLowerCase())
      );
      setSearchTransactions(searchedItem);
    }
  }, [filteredTransactions]);

  let nextId = Math.floor(Math.random() * 1000);
  let id = nextId.toString()
  

  return (
    
    <div className="container">
      <div className="input-container">
        <h2 className='app-header'>Search a Transactions</h2>
        <input type='text' placeholder='Enter a transaction' onChange={handleFilter} />
      </div>
      <button onClick={handleClick}>{text ? "Add Transaction" : "See Transactions" }</button>
      <div className="main-content" >
      {display ? <div className="list-container">
          <List transactions={searchTransactions.length > 0 ? searchTransactions : transactions} />  
        </div> :   <div className="form-container">
          <Form dataPassedBack={dataPassedBack} nextId={id} />
        </div>}
      </div>
    </div>
  );
}

export default App;
