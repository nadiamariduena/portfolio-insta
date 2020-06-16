import React, { Component } from "react";
import TopChild from "./Top-child.js";

class TopParent extends Component {
  render() {
    return (
      <div className="TopSection">
        <h1>I am the parent</h1>
        {/* The child component is rendered in the parent component , so here in this page */}
        <h3>
          <TopChild text="i am the 1 child" />
        </h3>
        <h3>
          <TopChild text="i am the 2 child" />
        </h3>
        <h3>
          <TopChild text="i am the 3 child" />
        </h3>
      </div>
    );
  }
}

export default TopParent;
