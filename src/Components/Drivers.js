import React, { Component } from "react";

export class Drivers extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch(
      encodeURI(`http://ergast.com/api/f1/2022/4/results.json`)
    );
    const data = await response.json();
    this.setState({ data: data });
  }
  render() {
    return <div>Drivers</div>;
  }
}

export default Drivers;
