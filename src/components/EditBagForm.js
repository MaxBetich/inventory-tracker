import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";

function EditBagForm (props) {
  function handleEditBagFormSubmission(event) {
    event.preventDefault();  
    props.onEditBag({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      id: props.bag.id,
      count: props.bag.count
    });
  }
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <form onSubmit={handleEditBagFormSubmission}>
            <input
              type="text"
              name="name"
              placeholder={`${props.bag.name}`} />
            <input
              type="text"
              name="origin"
              placeholder={`${props.bag.origin}`} />
            <input
              type="text"
              name="price"
              placeholder={`${props.bag.price}`} />
            <input
              type="text"
              name="roast"
              placeholder={`${props.bag.roast}`} />
            <Button className="btn-secondary" type="submit">Edit</Button>
          </form>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

EditBagForm.propTypes = {
  bag: PropTypes.object,
  onEditBag: PropTypes.func
};

export default EditBagForm;