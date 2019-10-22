import React from 'react'

export default (props) => (
  <h2>
    <h3>Car title: { props.name }</h3>
    <p>Car year: <strong>{ props.year }</strong></p>
    { props.children }
  </h2>
)
