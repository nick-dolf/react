import { times } from "lodash";
import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentGenre: 0,
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

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

  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre });
  };

  render() {
    if (this.state.movies.length === 0) return <h1>There are no movies</h1>;

    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      currentGenre,
    } = this.state;

    const genreMovies = allMovies.filter((m) => {
      if (currentGenre === 0) return m;

      return m.genre._id === genres[currentGenre]._id;
    });

    const movies = paginate(genreMovies, currentPage, pageSize);
    const count = genreMovies.length;

    return (
      <div className="row m-4">
        <div className="col-sm-3 m-2">
          <ListGroup
            genres={genres}
            currentGenre={currentGenre}
            onGenreChange={this.handleGenreChange}
          />
        </div>
        <div className="col">
          <h2>Showing {genreMovies.length} movies in the database</h2>
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
        </div>
      </div>
    );
  }
}

export default Movies;
