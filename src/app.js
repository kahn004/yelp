import React, {Component} from 'react'
import {render} from 'react-dom'
import 'font-awesome/css/font-awesome.css'
import './app.css'
import styles from './styles.module.css'

class App extends Component {

    render () {

      return (
        <div className={styles.wrapper}>
          <h1>
            <i className='fa fa-star'></i>
            Environment: {__NODE_ENV__}
          </h1>
        </div>
      )
    }
}

const mountNode = document.querySelector('#root')
render(<App />, mountNode)
