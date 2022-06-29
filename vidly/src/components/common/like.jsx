import React from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  classes += props.liked ? "" : "-o";

  return (
    <button onClick={() => props.toggleLike(props.id)} className="btn btn-sm">
      <i className={classes}></i>
    </button>
  );
};

export default Like;
