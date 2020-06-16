import React, { Component } from "react";
import TopChild from "./Top-child.js";

class TopParent extends Component {
  render() {
    return (
      <div className="TopSection">
        <div className="wrapperTop">
          <div className="topOne"></div>
          <div className="topTwo">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ab
              doloribus voluptate. Explicabo tempore iure voluptates! Dicta,
              ullam voluptates nesciunt tenetur corrupti, nisi possimus, quae
              perferendis laborum delectus itaque odio?
            </p>
          </div>
        </div>
        {/* ------------------------ */}

        {/* The child component is rendered in the parent component , so here in this page */}

        <div className="wrapperBalls">
          <div className="topBall one">
            <TopChild box="A" />
          </div>

          <div className="topBall two">
            <TopChild box="B" />
          </div>
          <div className="topBall three">
            <TopChild box="C" />
          </div>
        </div>
        {/* ----------------------- */}
      </div>
    );
  }
}

export default TopParent;
