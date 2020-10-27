import React, { useEffect } from 'react'
import './App.css';
import CurrencyRow from './CurrencyRow'

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  return (
    <> 
    <h1>Convert</h1>
    <CurrencyRow />
    <div className="equals">=</div>
    <CurrencyRow />
    </>
  );
}

export default App;
