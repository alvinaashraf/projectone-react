import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './dinner';
import Dinner from './dinner';

function App() {
  return (
    <div className="Dinner">
    <Dinner dishname="biryani"  sweet="ice creans" age = {20}  >

      </Dinner>

      <Dinner sweet="chocloate ">

        </Dinner>
    
         </div>
   
  );
}




export default App;

