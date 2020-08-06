import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v1 as uuid } from 'uuid';

export default class Shopper extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Eggs', quantity: 1 },
            { id: uuid(), name: 'Milk', quantity: 1 },
            { id: uuid(), name: 'Butter', quantity: 1 },
            { id: uuid(), name: 'Wheat', quantity: 1 }
        ]
    }
    render() {
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter Item');
                        const quantity = prompt('Enter Quantity');
                        if (name && quantity) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name, quantity }]
                            }));
                        }
                    }}
                >Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {this.state.items.map(({ id, name, quantity }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }));
                                        }}
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
