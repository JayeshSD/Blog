import React, { Component } from "react";
import Post from "./Post";
import { v4 as uuid } from "uuid";

class FilteredPosts extends Component {
  constructor(props) {
    super(props);
    this.renderPostList = this.renderPostList.bind(this);
  }
  renderPostList() {
    return this.props.posts.map((post) => (
      <li className="list-group-item" key={uuid()}>
        <Post title={post.title} content={post.content} />
      </li>
    ));
  }
  render() {
    return (
      <div className="mt-4 list-group list-group-flush">
        {this.renderPostList()}
      </div>
    );
  }
}

export default FilteredPosts;
