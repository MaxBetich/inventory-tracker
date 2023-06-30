import React from "react";
import PropTypes from "prop-types";
import {v4} from 'uuid';
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";

function NewBagForm(props){
  function handleNewBagFormSubmission(event) {
    event.preventDefault();
    props.onNewBagCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      count: 130,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <form onSubmit={handleNewBagFormSubmission}>
            <input
              type="text"
              name="name"
              placeholder="Name" />
            <input
              type="text"
              name="origin"
              placeholder="Origin" />
            <input
              type="text"
              name="price"
              placeholder="Price" />
            <input
              type="text"
              name="roast"
              placeholder="Roast" />
            <Button className="btn-secondary" type="submit">Add</Button>
          </form>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

NewBagForm.propTypes = {
  onNewBagCreation: PropTypes.func
};

export default NewBagForm;