import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import bagImg from "./../img/bag.jpg"

function Header(){
  return (
    <React.Fragment>
      <h1 style={{textAlign: 'center'}}>Coffee by the Bag</h1>
      <Container>
        <Row>
          <Col>
            <Image style={{width:'250px', margin: '5%'}} src={bagImg} alt="A bag of coffee beans" fluid/>
          </Col>
          <Col>
            <Image style={{width:'250px', margin: '5%'}} src={bagImg} alt="A bag of coffee beans" fluid/>
          </Col>
          <Col>
            <Image style={{width:'250px', margin: '5%'}} src={bagImg} alt="A bag of coffee beans" fluid/>
          </Col>
          <Col>
            <Image style={{width:'250px', margin: '5%'}} src={bagImg} alt="A bag of coffee beans" fluid/>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Header;