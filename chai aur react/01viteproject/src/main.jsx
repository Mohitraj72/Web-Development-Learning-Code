import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit'
// } 

const anotheruser = "Mohit Raj ";


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click to me visit ' , anotheruser 
)

const anotherreactElement = (
  <a href="https://google.com" target='_blank'>visit google </a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // anotherreactElement
  reactElement
  // <App />
  
  // </React.StrictMode>, 
)
