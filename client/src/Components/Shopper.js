import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import AddItem from './Additem';

class Shopper extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onclickDelete = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const items = this.props.items
        return (
            <Container>
                <AddItem/>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ id, name, quantity }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => this.onclickDelete(id)}
                                    >
                                        &times;
                                    </Button>
                                    <span style={{ marginLeft: '1rem' }}>{name}</span>
                                    <span style={{ float: 'right' }}>{quantity}</span>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.item.items
})

export default connect(mapStateToProps, { getItems, deleteItem })(Shopper);