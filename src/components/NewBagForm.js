import React from "react";
import PropTypes from "prop-types";
import {v4} from 'uuid';

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
        <button type="submit">Add</button>
      </form>
    </React.Fragment>
  );
}

NewBagForm.propTypes = {
  onNewBagCreation: PropTypes.func
};

export default NewBagForm;