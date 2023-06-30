import React from "react";
import PropTypes from "prop-types";

function Bag(props){
  return (
    <React.Fragment>
      <div onClick={() => props.whenBagClicked(props.id)}>
        <h3>Name: {props.name} - Roast: {props.roast}</h3>
        <p>Origin: {props.origin}</p>
        <p>Price: {props.price}</p>
        <p>Stock: {props.count}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Bag.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  count: PropTypes.number,
  id: PropTypes.string,
  whenBagClicked: PropTypes.func
};

export default Bag;