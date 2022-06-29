import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies().map((m) => ({ ...m, liked: false })),
  };

  handleDelete = (id) => {
    this.setState({
      movies: this.state.movies.filter((movie) => {
        return movie._id != id;
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

  renderMovies() {
    if (this.state.movies.length === 0) return <h1>There are no movies</h1>;

    return (
      <React.Fragment>
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
            {this.state.movies.map((movie) => (
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
      </React.Fragment>
    );
  }

  render() {
    return <React.Fragment>{this.renderMovies()}</React.Fragment>;
  }
}

export default Movies;
