import React, { Component } from 'react'
import 'whatwg-fetch'

import Card from './components/card'

export default class Cards extends Component {
  constructor () {
    super()

    this.state = { selected: [], data: [] }
  }

  render () {
    return (
      <div style={{ padding: '42px', maxWidth: '100%' }}>
        <h1 style={{ padding: '16px' }}>Compare Business Cards</h1>

        {this.state.data.map((card, index) => {
          return (
            <Card
              card={card}
              key={index}
              id={index}
              func={this.setSelected.bind(this)}
              selected={this.state.selected}
              compare={this.state.compare} />
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    fetch('/data/products.json')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.loadCards(json)
      })
  }

  loadCards (data) {
    this.setState({ data: data.results })
  }

  setSelected (id) {
    this.setState(({ selected }) => ({
      selected: selected.includes(id) || selected.length === 3
        ? selected.filter((item) => item !== id)
        : [...selected, id]
    }))
  }
}
