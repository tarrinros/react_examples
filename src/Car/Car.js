import React from 'react'

export default (props) => (
  <div>
    <h3>Car title: { props.name }</h3>
    <p>Car year: <strong>{ props.year }</strong></p>
    { props.children }
  </div>
)
