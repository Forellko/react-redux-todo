import React from 'react'

export default class Counter extends React.Component {
  render() {
    const arrDoneFilter = this.props.todoList.filter((elem) => {if(elem.isDone) {return false} else {return true} } )
    return (
      <div className="counter">
        {'left ' + arrDoneFilter.length}
      </div>
    )
  }
}