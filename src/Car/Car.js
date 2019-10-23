import React from 'react'

export default (props) => (
  <div style={{
    border: '1px solid #ccc',
    marginBottom: '20px',
    padding: '10px'
  }}>
    <h3>Car title: { props.name }</h3>
    <p>Car year: <strong>{ props.year }</strong></p>
    <input type='text' onChange={props.onChangeName} value={props.name}></input>
    <button onClick={props.onDelete}>Delete</button>
  </div>
)
