import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp() {
  return (
    <div>
      <h1>My App</h1>
      <p>My first React App</p>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp/>
  </React.StrictMode>,
)
