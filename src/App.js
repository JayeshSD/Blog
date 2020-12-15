import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FilteredPosts from "./FilteredPosts";
import { Navbar } from "./Navbar";
import NewPost from "./NewPost";
import Posts from "./Posts";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          title: "React JS",
          content:
            "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
        },
        {
          title: "Node Js",
          content:
            "Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser.",
        },
        {
          title: "Redux",
          content:
            "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
        },
        {
          title: "EJS",
          content:
            "What is the 'E' for? 'Embedded'? Could be. How about Effective, Elegant, or just Easy? EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.",
        },
        {
          title: "React Redux",
          content:
            "React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.",
        },
      ],
      serchedPost: [],
    };
    this.createPost = this.createPost.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  createPost(post) {
    this.setState({
      posts: [...this.state.posts, post],
    });
  }
  onSearchSubmit(searchTerm) {
    const subposts = this.state.posts.filter((subtitle) =>
      subtitle.title.toLocaleLowerCase().match(searchTerm.toLocaleLowerCase())
    );
    this.setState({ serchedPost: subposts });
  }

  render() {
    return (
      <div className="App container">
        <BrowserRouter>
          <Navbar onSearchSubmit={this.onSearchSubmit} />
          <Route
            exact
            path="/"
            component={() => <Posts posts={this.state.posts} />}
          />
          <Route
            exact
            path="/new"
            component={() => <NewPost createPost={this.createPost} />}
          />
          <Route
            exact
            path="/search"
            component={() => <FilteredPosts posts={this.state.serchedPost} />}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
