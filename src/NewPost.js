import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    const newPost = {
      title: this.state.title,
      content: this.state.content,
    };
    this.props.createPost(newPost);
    this.props.history.push("/");
  }

  render() {
    const { title, content } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              name="title"
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.onChange}
              aria-describedby="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <textarea
              name="content"
              className="form-control"
              id="content"
              value={content}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(NewPost);
