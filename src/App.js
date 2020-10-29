import React, { useEffect, useState } from 'react'
import './App.css';
import CurrencyRow from './CurrencyRow'

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {

  
  // returns array of options, first option is what state is ie currencyOptions() function, second option is value that allows us to set ie setCurrencyOptions() function, etc
  const [currencyOptions, setCurrencyOptions] = useState([]) //empty array is default
  //console.log(currencyOptions) all of the different currency options
  const [fromCurrency, setFromCurrency] = useState() // 4. passing in e.target.value
  const [toCurrency, setToCurrency] = useState()
  const [exchageRate, setExchangeRate] = useState() //by default, no value
  console.log(exchageRate)
  let [amount, setAmount] = useState(1) //default set to 1
  let [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchageRate
  } else {
    toAmount = amount
    fromAmount = amount / exchageRate
  }

  useEffect(() => { 
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      const firstCurrency = Object.keys(data.rates)[0] //get the first
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])  //convert data into array of options. Get just the key portion of the rates. Destructure with the ...
      setFromCurrency(data.base) 
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
      console.log(data)
    })

  }, []) //empty array means useEffect will only be called once

  useEffect(() => { //call anytime the currency changes
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
      .then(res => res.json())
      .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency = true
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency = false
  }


  return (
    <> 
    <h1>Convert</h1>
    <CurrencyRow 
      currencyOptions={currencyOptions} //pass in currencyOptions as a prop
      selectedCurrency={fromCurrency}
      onChangeCurrency={e => setFromCurrency(e.target.value)} //3. set to equal to a function that gets the event from the select
      onChangeAmount={handleFromAmountChange} //set to variable
      amount={fromAmount}
    />
    <div className="equals">=</div>
    <CurrencyRow 
      currencyOptions={currencyOptions} //pass in currencyOptions as a prop
      selectedCurrency={toCurrency}
      onChangeCurrency={e => setToCurrency(e.target.value)} 
      onChangeAmount={handleToAmountChange}
      amount={toAmount}
    />
    </>
  );
}

export default App;
