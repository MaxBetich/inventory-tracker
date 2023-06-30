import React from 'react';
import NewBagForm from './NewBagForm';
import BagList from './BagList';
import BagDetail from './BagDetail';
import PropTypes from "prop-types";
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';

class BagControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBagList: [],
      selectedBag: null
    };
  }

  handleAddingNewBagToList = (newBag) => {
    const newMainBagList = this.state.mainBagList.concat(newBag);
    this.setState({
      mainBagList: newMainBagList,
      formVisibleOnPage: false });
  }

  handleClick = () => {
    if (this.state.selectedBag != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBag: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedBag = (id) => {
    const selectedBag = this.state.mainBagList.filter(bag => bag.id === id)[0];
    this.setState({selectedBag: selectedBag});
  }

  handleSellingBag = (id) => {
    const selectedBag = this.state.mainBagList.filter(bag => bag.id === id)[0];
    const count= selectedBag.count;
    selectedBag.count = count -1;
    this.setState({
        selectedBag: null})
  }

  handleDeletingBag = (id) => {
    const newMainBagList = this.state.mainBagList.filter(bag => bag.id !== id);
    this.setState({
      mainBagList: newMainBagList,
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = "Add New Bag";

    if (this.state.selectedBag != null) {
      currentlyVisibleState = <BagDetail bag = {this.state.selectedBag} onBagSale={this.handleSellingBag} onClickingDelete={this.handleDeletingBag}/>;
      buttonText= "Return to Bag List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBagForm onNewBagCreation={this.handleAddingNewBagToList} />;
      buttonText = "Return to Bag List";
    } 
    // else {
    //   currentlyVisibleState = <BagList bagList={this.state.mainBagList} onBagSelection={this.handleChangingSelectedBag} />;
    //   buttonText = "Add Bag";
    // }
    return (
      <React.Fragment>
        <div class="container-text-center">
          <div class="row">
            <div class="col">
              <BagList bagList={this.state.mainBagList} onBagSelection={this.handleChangingSelectedBag} />
              <Button className='btn-secondary' onClick={this.handleClick}>Add Bag</Button>
            </div>
            <div class="col">
              {currentlyVisibleState}
              <Button className='btn-secondary' onClick={this.handleClick}>{buttonText}</Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

BagControl.propTypes = {
  formVisibleOnPage: PropTypes.bool,
  mainBagList: PropTypes.array
}

export default BagControl;