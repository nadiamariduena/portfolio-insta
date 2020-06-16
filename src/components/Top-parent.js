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
              James Turrell is an American artist primarily concerned with Light
              and Space. Turrell was a MacArthur Fellow in 1984. Turrell is best
              known for his work in progress, Roden Crater, a natural cinder
              cone crater located outside Flagstaff, Arizona, that he is turning
              into a massive naked-eye observatory.
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
