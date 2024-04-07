import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

import Hello from './HelloReact'
import HelloJS from './HelloJS'

const helloJS1 = new HelloJS()
document.body.appendChild(helloJS1.render())
const helloJS2 = new HelloJS()
document.body.appendChild(helloJS2.render())

/* Code below in reactDOM.render is the same sa JSX
 <div>
<Hello/>
<Hello/>
</div> */

createRoot(
  document.getElementById('root'))
  .render(
    React.createElement('div',
      {}, [
        React.createElement(Hello),
        React.createElement(Hello)
      ]
    )

  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
