import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

export class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }
  handleValidation() {
    let title = this.state.title;
    let content = this.state.content;
    let errors = {};
    let formIsValid = true;
    if (!title) {
      formIsValid = false;
      errors.title = "Please enter a title";
    }
    if (!content) {
      formIsValid = false;
      errors.content = "Please enter the content for the blog";
    }
    this.setState({ errors });
    return formIsValid;
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    if (!this.handleValidation()) {
      return console.log(this.state.errors);
    }
    const newPost = {
      title: this.state.title,
      content: this.state.content,
    };
    this.props.createPost(newPost);
    this.props.history.push("/");
  }

  render() {
    const { title, content, errors } = this.state;
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
              // className="form-control"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.title,
              })}
              id="title"
              value={title}
              onChange={this.onChange}
              aria-describedby="title"
            />
            {errors.title && (
              <div className="invalid-feedback">{errors.title}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <textarea
              name="content"
              // className="form-control"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.content,
              })}
              id="content"
              value={content}
              onChange={this.onChange}
            />
            {errors.content && (
              <div className="invalid-feedback">{errors.content}</div>
            )}
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
