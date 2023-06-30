import React from "react";

function NewBagForm(){
  function handleNewBagFormSubmission(event) {
    event.preventDefault();
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
      </form>
    </React.Fragment>
  );
}

export default NewBagForm;