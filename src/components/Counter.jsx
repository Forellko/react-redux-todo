import React from 'react'

export default class Counter extends React.Component {
  render() {
    const arrDoneFilter = this.props.mainTasks.filter((elem, index) => {if(elem.isDone) {return false} else {return true} } )
    return (
      <div>
        {'left ' + arrDoneFilter.length}
      </div>
    )
  }
}
