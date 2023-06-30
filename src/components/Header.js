import React from "react";
import bagImg from "./../img/bag.jpg"

function Header(){
  return (
    <React.Fragment>
    <h1>Coffee by the Bag</h1>
    <img style={{width:'250px'}} src={bagImg} alt="A bag of coffee beans" />
    </React.Fragment>
  );
}

export default Header;