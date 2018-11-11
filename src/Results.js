import React from "react";
import * as PropTypes from "prop-types";

export function Results(props) {
  if (props.entries.length > 0) {
    return <div>
      <h3 data-toggle="tooltip" data-placement="top" title={props.description}>{props.title}</h3>

      <p>{props.entries.join(", ")}</p>
    </div>;
  } else {
    return '';
  }
}

Results.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  entries: PropTypes.arrayOf(PropTypes.string),
};

Results.defaultProps = {
  description: '',
  entries: [],
};
