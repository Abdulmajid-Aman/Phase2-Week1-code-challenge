import React, { useEffect, useState } from 'react'
import List from './List'



function App() {
  const [transactions, setTransactions] = useState([])
  
  
   useEffect(() => {
    fetch("https://bank-of-flatiron-backend-roan.vercel.app/transactions")
    .then(res => res.json())
    .then(data => setTransactions(data))
   }, [])



  return (
     <> 
        <List  transactions = {transactions}/>
        
     </>
  )
}

export default App