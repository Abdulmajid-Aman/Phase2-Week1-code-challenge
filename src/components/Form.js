import React, { useState } from 'react';
import '../App.css'; 

function Form({ dataPassedBack, nextId }) {
  const [formData, setFormData] = useState({
    id: nextId,
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleData(e) {
    e.preventDefault();
    fetch('https://bank-backend-drab.vercel.app/transactions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => console.log("Form submitted", data));

    dataPassedBack(formData);
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: ""
    });
  }

  return (
    <form className="form-container" onSubmit={handleData}>
          <h2 className='form-header'>Add a new Transactions</h2>
      <label htmlFor='date'>Date</label><br />
      <input type='date' name='date' value={formData.date} onChange={handleChange} required /><br />

      <label htmlFor='description'>Description</label><br />
      <textarea name='description' value={formData.description} cols={50} rows={4} required placeholder='Enter the description of your statement' onChange={handleChange}></textarea><br />

      <label htmlFor='amount'>Amount: </label><br />
      <input type='number' name='amount' value={formData.amount} onChange={handleChange}  required /><br />

      <label htmlFor='category'>Category</label><br />
      <select value={formData.category} name='category' onChange={handleChange} required >
        <optgroup label='Deposit'>
          <option value='income'>Income</option>
          <option value='savings'>Savings</option>
        </optgroup>
        <optgroup label='Withdrawals'>
          <option value='Fashion'>Fashion</option>
          <option value='Food'>Food</option>
          <option value='Gift'>Gift</option>
          <option value='Transportation'>Transportation</option>
          <option value='Entertainment'>Entertainment</option>
        </optgroup>
      </select><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
