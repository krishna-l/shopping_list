import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class Additem extends Component {
    state = {
        modal: false,
        name: '',
        quantity: 1
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: this.state.name,
            quantity: this.state.quantity
        }

        this.props.addItem(newItem);
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >
                    Add Item
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to Shopping list</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add shopping Item"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="quantity">Qantity</Label>
                                <Input
                                    type="number"
                                    name="quantity"
                                    id="quantity"
                                    placeholder="Enter the Quantity"
                                    onChange={this.handleChange}
                                    required={true}
                                    value={this.state.quantity}
                                />
                            </FormGroup>
                            <Button
                                color="dark"
                                style={{margin: '2rem 0'}}
                                onClick={this.onSubmit}
                                block
                            >
                                Add
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, {addItem})(Additem);