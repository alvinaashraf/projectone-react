import React from 'react';



export const Transaction = ({Transaction}) => {

return (


    <li className="plus">   {Transaction.description} <span>  {Transaction.amount}  </span>
    <button className="delete-btn"> X</button>
         </li>
       
)


}


