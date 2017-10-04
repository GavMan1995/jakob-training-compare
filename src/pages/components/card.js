import React from 'react'

export default function Card ({ card, id, func, selected, compare }) {
  let selectStyle = '0'

  if (selected.indexOf(id) !== -1) {
    selectStyle = '1px solid blue'
  }

  const cardStyles= {
    margin: '16px',
    marginBottom: '32px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    border: selectStyle
  }

  const img = {
    flexBasis: '200px'
  }

  const desc = {
    flexBasis: '200px',
    flexGrow: '1',
    paddingLeft: '16px'
  }

  const actions = {
    margin: '16px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexBasis: '200px',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  }

  const button = {
    marginTop: '8px',
    marginBottom: '16px',
    flexBasis: '100%',
    borderRadius: '8px',
    backgroundColor: 'teal',
    color: 'white',
    padding: '16px',
    border: '0',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center'
  }

  const buttonOff = {
    marginTop: '8px',
    marginBottom: '16px',
    flexBasis: '100%',
    borderRadius: '8px',
    backgroundColor: 'grey',
    color: 'white',
    padding: '16px',
    border: '0',
    textDecoration: 'none',
    textAlign: 'center'
  }

  let rating = []
  let Button = (
    <a style={buttonOff}>
      Compare Selected
    </a>
  )

  for (let i = 0; i < card.userRating; i++) {
    rating.push('*')
  }

  if (selected.length > 1) {
    Button = (
      <a href='/compare' style={button}>
        Compare Selected
      </a>
    )
  }

  return (
    <div style={cardStyles}>
      <div style={img}>
        <img style={{ width: '100%', height: 'auto' }}  alt='card' src={card.image} />
      </div>

      <div style={desc}>
        <h3>{card.title}</h3>
        <p>{card.desc}</p>
      </div>

      <div style={actions}>
        <div style={{ flexBasis: '100%' }}>
          <input onClick={ () => { func(id) } } type='checkbox' />
          <label>Compare</label>
        </div>

        {Button}

        <div style={{ flexBasis: '100%', display: 'flex', flexWrap: 'nowrap' }}>
          {rating.map((rate, index) => {
            return <h1 style={{ padding: '4px' }} key={index}>{rate}</h1>
          })}
        </div>
      </div>
    </div>
  )
}
