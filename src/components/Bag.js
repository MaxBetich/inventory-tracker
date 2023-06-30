import React from "react";
import PropTypes from "prop-types";

function Bag(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.roast}</h3>
      <p>{props.origin}</p>
      <p>{props.price}</p>
      <hr/>
    </React.Fragment>
  );
}

Bag.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired
};

export default Bag;