//import React from 'react';
//import React from 'react';
import  React,  {useContext} from 'react';
import {Globalcontext}  from '../context/GlobalState';
import {Transaction} from './Transaction';



function TransactionHistory() {
const {transactions } = useContext(Globalcontext)

  return (
<div   >   
<h3> Transaction History  </h3>

<ul className="list" >
   {transactions.map( transaction => (
    <Transaction Transaction={Transaction}/>


   ))}




     </ul>

</div>
  
  
  
    );
}




export default TransactionHistory;


