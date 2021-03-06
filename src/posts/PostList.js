import React, { Component } from "react";
import PostTest from "../data/posts.json";

class PostList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="middle-section">
          <div className="container-images">
            {/* ------- */}
            {PostTest.map((postDetail, index) => {
              return (
                <div className="quote">
                  <h4>{postDetail.title}</h4>
                  <p>{postDetail.content}</p>
                  <img
                    src={postDetail.image}
                    className="img-box"
                    alt="images"
                  />
                </div>
              );
            })}
            {/* ------- */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PostList;
