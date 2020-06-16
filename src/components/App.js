import React, { Component } from "react";
import PostList from "../posts/PostList";
//
//
//

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <PostList />
        </div>
      </React.Fragment>
    );
  }
}

// const App = () => {
//   return (
//     <React.Fragment>
//       <PostList />

//       {/* -------section--TOP-------- */}
//       <section id="top">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid
//           nobis magni inventore illo aspernatur explicabo quas molestias dolore
//           saepe!
//         </p>
//       </section>
//     </React.Fragment>
//   );
// };

export default App;
