import React, { PureComponent } from 'react'
import { createStore } from 'redux'

export default class Counter extends React.Component {
  render() {
    const arrDoneFilter = this.props.mainTasks.filter((elem, index) => {if(elem.isDone) {return false} else {return true} } )
    return (
      <div className="counter">
        {'left ' + arrDoneFilter.length}
      </div>
    )
  }
}