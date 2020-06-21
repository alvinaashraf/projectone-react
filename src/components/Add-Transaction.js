//import React from 'react';
import  React,  {useState} from 'react';
function AddTransaction() {
const [description , setdescription] =useState();
const [amount , setamount ] = useState();



  return (
<div>  
<h3> Add New Transaction
    </h3>
<form>
<div className="form-control">

    <label>  Description</label>
    <input type="text"  placeholder="enter details" value={description}  onChange={(e) => setdescription(e.target.value)}  />
    </div>
<div  className="form-control">
<label> Transaction Amount  </label>
<input type="number" id="transactionamount  " placeholder="enter amount "  value={amount}  onChange={(e) => setamount(e.target.value)}   />


    </div>
    <button className="btn"> Add Transaction   </button>
    </form>



  </div>
  
  
  
    );
}




export default AddTransaction;

