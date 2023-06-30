import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

function BagDetail(props){
  const {bag, onClickingDelete, onBagSale} = props;
  if (bag.count > 0) {
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <h1>Bag Details</h1>
          <h3>Blend Name: {bag.name}</h3>
          <h3>Origin: {bag.origin}</h3>
          <h3>Price: {bag.price}</h3>
          <h3>In stock: {bag.count}</h3>
          <Button className="btn-secondary" onClick={()=>onBagSale(bag.id)}>Sell</Button>
          <Button className="btn-danger" onClick={()=> onClickingDelete(bag.id)}>Remove from Inventory</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );} else {
    return (
      <React.Fragment>
        <Card>
          <Card.Body>
            <h1>Bag Details</h1>
            <h3>Blend Name: {bag.name}</h3>
            <h3>Origin: {bag.origin}</h3>
            <h3>Price: {bag.price}</h3>
            <h3>Out of Stock!</h3>
            <Button className="btn-danger" onClick={()=> onClickingDelete(bag.id)}>Remove from Inventory</Button>
          </Card.Body>
        </Card>
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