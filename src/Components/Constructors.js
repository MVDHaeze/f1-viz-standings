import React, { Component } from "react";
import results from "../data/results.json";

export class Constructors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results,
    };
  }
  render() {
    return <div></div>;
  }
}

export default Constructors;
