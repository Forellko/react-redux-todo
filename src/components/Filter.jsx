import React from 'react'

export default class Filter extends React.Component {

  // constructor (props) {
  //   super(props);
  // }

  render() {
    return (
      <form className="filter">
        <input className="filter__left" type="button" value="left"></input>
        <input className="filter__done" type="button" value="done"></input>
        <input className="filter__all" type="button" value="all"></input>
      </form>
    )
  }
}