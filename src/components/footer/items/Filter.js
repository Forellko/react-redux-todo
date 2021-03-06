import React from "react";

export default class Filter extends React.Component {
  // constructor (props) {
  //   super(props);
  // }
  onClickFilter(e) {}

  render() {
    return (
      <form
        className="filter"
        onClick={(e) => {
          e.preventDefault();
          this.props.filterTask(e.target.value);
        }}
      >
        <input className="filter__left filters" type="button" value="left"></input>
        <input className="filter__done filters" type="button" value="done"></input>
        <input className="filter__all filters" type="button" value="all"></input>
      </form>
    );
  }
}
