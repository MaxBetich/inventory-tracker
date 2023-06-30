import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';

function Bag(props){
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <div onClick={() => props.whenBagClicked(props.id)}>
            <Card.Title>Name: {props.name} - Roast: {props.roast}</Card.Title>
              <ul>
              <li>Origin: {props.origin}</li>
              <li>Price: {props.price}</li>
              <li>Stock: {props.count}</li>
              </ul>
          </div>
        </Card.Body>
      </Card>
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