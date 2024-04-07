import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

const onChange = (event) => {
  console.log('changed', event, event.target, event.target.value)
}
// input on change
const inputOnChange = document.createElement('input')
inputOnChange.placeholder = 'input HTML-Change'
inputOnChange.addEventListener('change', onChange)

document.body.appendChild(inputOnChange)
// input on input
const inputOnInput = document.createElement('input')
inputOnInput.placeholder = 'input HTML-Input'
inputOnInput.addEventListener('input', onChange)

document.body.appendChild(inputOnInput)

createRoot(
  document.getElementById('root'))
  .render(
    <input
      onChange={onChange}
      placeholder={'input JSX'}
    />

  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
