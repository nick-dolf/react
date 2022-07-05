import React from "react";

const ListGroup = (props) => {
  const { genres, currentGenre, onGenreChange, valueProperty, textProperty } =
    props;

  return (
    <ul className="list-group">
      {genres.map((genre, index) => {
        return (
          <li
            style={{ cursor: "pointer" }}
            key={genre[valueProperty]}
            onClick={() => onGenreChange(index)}
            className={
              index === currentGenre
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {genre[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
