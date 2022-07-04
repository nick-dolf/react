import { times } from "lodash";
import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies().map((m) => ({ ...m, liked: false })),
    movies_paginated: [],
    pageSize: 4,
    currentPage: 1,
  };

  handleDelete = (id) => {
    this.setState({
      movies: this.state.movies.filter((movie) => {
        return movie._id !== id;
      }),
    });
  };

  toggleLike = (id) => {
    const movies = this.state.movies.filter((m) => {
      if (m._id === id) m.liked = !m.liked;
      return m;
    });

    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    if (this.state.movies.length === 0) return <h1>There are no movies</h1>;

    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        {" "}
        <h2>Showing {this.state.movies.length} movies in the database</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    id={movie._id}
                    toggleLike={this.toggleLike}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          onPageChange={this.handlePageChange}
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
