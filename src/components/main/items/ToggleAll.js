import React, { Component } from "react";

export default class ToggleAll extends Component {
  render() {
    return (
      <>
        <input id="toggle-all" type="checkbox" className="toggle-all"></input>
        <label for="toggle-all"></label>
      </>
    );
  }
}
