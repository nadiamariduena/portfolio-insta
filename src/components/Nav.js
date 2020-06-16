import React, { Component } from "react";
class Nav extends Component {
  state = {
    //   normal text without links
    // messages: ["hello1", "hello2", "hello3"],

    // objects for links

    links: [
      {
        target: "https://www.instagram.com/",
        label: "portfolio",
      },
      {
        target: "https://www.instagram.com/",
        label: "news",
      },
      {
        target: "https://www.instagram.com/",
        label: "contact",
      },
    ],
  };

  render() {
    return (
      <header>
        <h2 className="logo">logo</h2>
        <input placeholder="write something"></input>
        <nav>
          <ul>
            {this.state.links.map((link) => (
              <li>
                {/*
            ASK about this, its important!!

            https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md */}
                <a href={link.target} target="_blank">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;
