import React from "react";
import PropTypes from "prop-types";

function BagDetail(props){
  const {bag} = props;

  return (
    <React.Fragment>
      <h1>Bag Details</h1>
      <h3>Blend Name: {bag.name}</h3>
      <h3>Origin: {bag.origin}</h3>
      <h3>Price: {bag.price}</h3>
      <hr/>
    </React.Fragment>
  );
}

BagDetail.propTypes = {
  bag: PropTypes.object
};

export default BagDetail;