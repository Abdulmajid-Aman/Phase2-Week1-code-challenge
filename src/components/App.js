import React, { useEffect, useState } from 'react'
import List from './List'
import Form from "./Form"


function App() {
  const [transactions, setTransactions] = useState([])
  const [newTransactions , setNewTransactions] = useState([])

  function dataPassedBack(value) {
   setNewTransactions(value)
   console.log(value);
  }
  
  
   useEffect(() => {
    fetch('http://localhost:3000/transactions')
    .then(res => res.json())
    .then(data => setTransactions(data))
   }, [])

   let newArray = [...transactions, newTransactions]
   console.log(newArray);
 
    
   let nextId = Math.floor(Math.random()*50)
   let id = nextId.toString()


  return (
     <> 
        <List  transactions = {newArray}/>
        <Form  dataPassedBack = {dataPassedBack}  nextId = {id}/>
        
     </>
  )
}

export default App