import React, { Component } from "react";
import Cutting from "./components/Cutting";
import Coloring from "./components/Coloring";
import Smoothing from "./components/Smoothing";
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <div className="page hide buttons-wrapper" id="services">
          <Cutting/>
          <Coloring/>
          <Smoothing/>
      </div>
    );
  }
}

export default Services;
