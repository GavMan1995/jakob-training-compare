import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './defaults.css'

import Cards from './pages/cards'
import CardCompare from './pages/card-compare'

class App extends Component {
  render() {
    const headerStyles = {
      maxWidth: '100%',
      padding: '8px',
      borderBottom: '1px solid black',
      backgroundColor: 'teal',
      color: 'white'
    }

    return (
      <div style={{ width: '100%' }}>
        <div style={headerStyles}>
          <a href='/' style={{ cursor: 'pointer'}}>
            <img style={{ width: '60px'}} alt='card' src='http://www.iconsdb.com/icons/preview/white/bank-cards-xxl.png' />
          </a>
        </div>

        <Router>
          <div style={{maxWidth: '100%', display: 'block', paddingLeft: 'calc(50% - 600px)', paddingRight: 'calc(50% - 600px)'}}>
            <Route exact path='/' component={Cards} />
            <Route exact path='/compare' component={CardCompare} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
