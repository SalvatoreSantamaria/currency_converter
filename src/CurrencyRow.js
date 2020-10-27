import React from 'react' 

export default function CurrencyRow(props) {
  // destructure props into objects
  const {
    currencyOptions
  } = props
  return (
    <div>
      <input type="number" className="input"/>
      <select>
        {currencyOptions.map(prop => (
        <option key={prop} value={prop}>{prop}</option>
        ))}
      </select>
    </div>
  )
}