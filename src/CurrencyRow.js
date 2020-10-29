import React from 'react'

export default function CurrencyRow(props) {
    // destructure props into objects
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency, //2. onChange function
    onChangeAmount,
    amount
  } = props
  return (
    <div>
 
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      {/*1. everytime value is called, onChange pushes a function, that we take from the props, called onChangeCurrenncy */}
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => ( //translate currencyOptions into actual options
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}