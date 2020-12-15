import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.onSearch = this.onSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSearch(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    const searchTerm = this.state.search;
    this.props.onSearchSubmit(searchTerm);
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Blogger
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/new">
                    Create Post
                  </Link>
                </li>
              </ul>
              <form className="d-flex" onSubmit={this.onSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  name="search"
                  value={this.state.search}
                  onChange={this.onSearch}
                />
                <NavLink
                  className="btn btn-outline-success"
                  type="submit"
                  to="/search"
                >
                  Search{" "}
                </NavLink>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
