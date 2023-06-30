import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function BagDetail(props){
  const {bag, onClickingDelete, onBagSale} = props;
  // function handleUpdateCount() {
  //   if (bag.count > 0) {
  //     bag.count = bag.count-1;
  //     props.onBagSale();
  //   }
  // }
  if (bag.count > 0) {
  return (
    <React.Fragment>
      <h1>Bag Details</h1>
      <h3>Blend Name: {bag.name}</h3>
      <h3>Origin: {bag.origin}</h3>
      <h3>Price: {bag.price}</h3>
      <h3>In stock: {bag.count}</h3>
      <Button className="btn-secondary" onClick={()=>onBagSale(bag.id)}>Sell</Button>
      <Button className="btn-danger" onClick={()=> onClickingDelete(bag.id)}>Remove from Inventory</Button>
      <hr/>
    </React.Fragment>
  );} else {
    return (
      <React.Fragment>
        <h1>Bag Details</h1>
        <h3>Blend Name: {bag.name}</h3>
        <h3>Origin: {bag.origin}</h3>
        <h3>Price: {bag.price}</h3>
        <h3>Out of Stock!</h3>
        <hr/>
      </React.Fragment>
    );
  }
}

BagDetail.propTypes = {
  bag: PropTypes.object,
  onBagSale: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default BagDetail;