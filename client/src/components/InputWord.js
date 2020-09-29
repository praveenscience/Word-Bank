import React, { Component } from "react";

export class InputWord extends Component {
  render() {
    return (
      <div className="inp">
        <h1>Great Learning</h1>
        <div className="head">
          POST WORD <input type="radio" name="san" checked />
          FETCH WORD <input type="radio" name="san" />
          <hr />
        </div>
        <h6>Enter Your Word Here!</h6>
        <input type="text" id="in" />
        <button className="btn btn-primary">Add</button>
        <h5>Add Meaning of Your Word</h5>
        <textarea row="4" cols="5" id="area" name="s" />
      </div>
    );
  }
}

export default InputWord;
