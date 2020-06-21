//import React from 'react';
import './App.css';
import  React from 'react';

import Header from './components/Header';
import Balance from './components/Balance';
import AccountSummary from './components/AccountSummary';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/Add-Transaction';
import {GlobalProvider} from './context/GlobalState';

function App() {
  //let [count , setcount ] =useState(0)
  //let [isday , setday ] = useState(false)


  return (
    <GlobalProvider>
<div>
<Header>
  </Header>
  <div className="container">
<Balance/>
<AccountSummary/>
<TransactionHistory>
  </TransactionHistory>
  <AddTransaction>
    </AddTransaction>
    </div>

  </div>
  
  </GlobalProvider>
  
  
    );
}




export default App;

