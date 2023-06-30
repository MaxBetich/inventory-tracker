import React from "react";
import Bag from "./Bag";
import PropTypes from "prop-types";

function BagList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.bagList.map((bag, index) =>
        <Bag name={bag.name}
          origin={bag.origin}
          price={bag.price}
          roast={bag.roast}
          key={index} />
      )}
    </React.Fragment>
  );
}

BagList.propTypes = {
  bagList: PropTypes.array
};

export default BagList;