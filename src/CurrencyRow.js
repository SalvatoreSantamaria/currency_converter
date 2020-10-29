import React from 'react' 

export default function CurrencyRow(props) {
  // destructure props into objects
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount
  } = props
  return (
    <div>
      <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(prop => (
        <option key={prop} value={prop}>{prop}</option>
        ))}
      </select>
    </div>
  )
}