import React, { useEffect, useState } from 'react'
import data from "./db.json"
import List from './List'

function App() {
  const [transactions, setTransactions] = useState([])
  let payments = data.transactions
  
    useEffect(() => {
      setTransactions(payments)
    }, [payments])



  return (
     <>
        <List  transactions = {transactions}/>
     </>
  )
}

export default App