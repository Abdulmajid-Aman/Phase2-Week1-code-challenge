import React, { useState } from 'react'

function Form() {

  const [formData , setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  })

  return (
    <form>
        <label htmlFor='date'>Date</label><br/>
        <input type='date' name='date' value={formData.date} /><br/>

        <label htmlFor='description'>Description</label><br/>
        <textarea name='description' value={formData.description} cols={50} rows={4} placeholder='Enter the description of your statement'></textarea><br/>

        <label htmlFor='amount'>Amount: </label><br/>
        <input type='number' name='amount' value={formData.amount} /><br/>

        <label htmlFor='category'>Category</label><br/>
        <select value={formData.category} name='category'>
          <optgroup label='Deposit'>
          <option value='income'>Income</option>
          <option value='savings'>Savings</option>
          </optgroup>
          <optgroup label ='Expenses'>
          <option value='fashion'>Fashion</option>
          <option value='food'>Food</option>
          <option value='gift'>Gift</option>
          <option value='transportation'>Transportation</option>
          <option value='entertainment'>Entertainment</option>
          </optgroup>
        </select>

    </form>
  )
}

export default Form