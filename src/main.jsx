import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Api from './lib/api'

function render(results) {
  ReactDOM.render(
    <React.StrictMode>
      <App reportAction={report} results={results}/>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

function report(action) {
  Api.report(render);
}

render({})
