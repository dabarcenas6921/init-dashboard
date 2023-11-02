// ShellHacks.tsx
import React, { Component } from "react";
import MasonBody from "./Mason";

export default class ShellHacks extends Component {
  render() {
    console.log("Component is rendering");
    return (
      <div className="">
        <MasonBody />
      </div>
    );
  }
}
