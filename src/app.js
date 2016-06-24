import React, {Component} from 'react'
import {render} from 'react-dom'
import './app.css'
import App from 'containers/App/App'

const mountNode = document.querySelector('#root')
render(<App />, mountNode)
