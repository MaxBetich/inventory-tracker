import React from 'react';
import NewBagForm from './NewBagForm';
import EditBagForm from './EditBagForm';
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
      selectedBag: null,
      editing: false
    };
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleAddingNewBagToList = (newBag) => {
    if(newBag.name && newBag.origin && newBag.price && newBag.roast) {
      const newMainBagList = this.state.mainBagList.concat(newBag);
      this.setState({
        mainBagList: newMainBagList,
        formVisibleOnPage: false });
    }
  }

  handleClick = () => {
    if (this.state.selectedBag != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBag: null,
        editing: false
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

  handleEditingBagInList = (bagToEdit) => {
    if(bagToEdit.name && bagToEdit.origin && bagToEdit.price && bagToEdit.roast) {
      const editedMainBagList = this.state.mainBagList
      .filter(bag => bag.id !== this.state.selectedBag.id)
      .concat(bagToEdit);
      this.setState({
        mainBagList: editedMainBagList,
        editing: false,
        selectedBag: null
      })
    }
  }

  handleSellingBag = (id) => {
    const selectedBag = this.state.mainBagList.filter(bag => bag.id === id)[0];
    const count= selectedBag.count;
    selectedBag.count = count -1;
    this.setState({
        selectedBag: selectedBag})
  }

  handleDeletingBag = (id) => {
    const newMainBagList = this.state.mainBagList.filter(bag => bag.id !== id);
    this.setState({
      mainBagList: newMainBagList,
      selectedBag: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = "Add New Bag";

    if (this.state.editing) {
      currentlyVisibleState = <EditBagForm bag = {this.state.selectedBag} onEditBag = {this.handleEditingBagInList}/>
      buttonText='Close';
    } else if (this.state.selectedBag != null) {
      currentlyVisibleState = <BagDetail bag = {this.state.selectedBag} onBagSale={this.handleSellingBag} onClickingDelete={this.handleDeletingBag} onClickingEdit = {this.handleEditClick}/>;
      buttonText= "Close";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBagForm onNewBagCreation={this.handleAddingNewBagToList} />;
      buttonText = "Close";
    }
    return (
      <React.Fragment>
        <hr/>
        <div className="container-text-center">
          <div className="row">
            <div className="col">
              <BagList bagList={this.state.mainBagList} onBagSelection={this.handleChangingSelectedBag} />
              {/* <Button className='btn-secondary' onClick={this.handleClick}>Add Bag</Button> */}
            </div>
            <div className="col">
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
  mainBagList: PropTypes.array,
  selectedBag: PropTypes.bool,
  editing: PropTypes.bool
}

export default BagControl;