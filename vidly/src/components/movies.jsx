import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentGenre: 0,
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
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
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    if (this.state.movies.length === 0) return <h1>There are no movies</h1>;

    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      currentGenre,
      sortColumn,
    } = this.state;

    const genreMovies = allMovies.filter((m) => {
      if (currentGenre === 0) return m;

      return m.genre._id === genres[currentGenre]._id;
    });

    const sorted = _.orderBy(
      genreMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sorted, currentPage, pageSize);
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
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.toggleLike}
            onSort={this.handleSort}
          />
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
