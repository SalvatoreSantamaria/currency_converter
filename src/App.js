import React, { useEffect, useState } from 'react'
import './App.css';
import CurrencyRow from './CurrencyRow'

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {

  
  // returns array of options, first option is what state is ie currencyOptions() function, second option is value that allows us to set ie setCurrencyOptions() function
  const [currencyOptions, setCurrencyOptions] = useState([]) //empty array is default
  //console.log(currencyOptions) all of the different currency options

  useEffect(() => { 
    fetch(BASE_URL)
    .then(response => response.json())
    .then(data => { //convert data into array of options. Get just the key portion of the rates. Destructure with the ...
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      console.log(data)
    })

  }, []) //empty array means useEffect will only be called once
  return (
    <> 
    <h1>Convert</h1>
    <CurrencyRow 
      currencyOptions={currencyOptions} //pass in currencyOptions as a prop
    />
    <div className="equals">=</div>
    <CurrencyRow 
      currencyOptions={currencyOptions} //pass in currencyOptions as a prop
    />
    </>
  );
}

export default App;
