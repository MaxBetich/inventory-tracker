import React from "react";
import Bag from "./Bag";
import PropTypes from "prop-types";

function BagList(props) {
  return (
    <React.Fragment>
      {props.bagList.map((bag) =>
        <Bag 
          whenBagClicked={props.onBagSelection}
          name={bag.name}
          origin={bag.origin}
          price={bag.price}
          roast={bag.roast}
          count={bag.count}
          id={bag.id}
          key={bag.id} />
      )}
    </React.Fragment>
  );
}

BagList.propTypes = {
  bagList: PropTypes.array,
  onBagSelection: PropTypes.func
};

export default BagList;