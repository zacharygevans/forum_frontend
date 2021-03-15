import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { store } from './redux'

axios.defaults.baseURL = 'http://68.183.18.78:8000'
const token = localStorage.getItem('token')
const username = localStorage.getItem('username')
if (token && username) {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` }
  store.dispatch({ type: 'login', payload: { username, token } })
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
