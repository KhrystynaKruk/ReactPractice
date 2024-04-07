import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

const onClick = (event) => {
  console.log('Clicked', event, event.target)
}
const button = document.createElement('button')
button.innerText = 'Pure js'
button.addEventListener('click', onClick)

document.body.appendChild(button)

createRoot(
  document.getElementById('root'))
  .render(
    <button onClick={onClick}>Pure react</button>
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
