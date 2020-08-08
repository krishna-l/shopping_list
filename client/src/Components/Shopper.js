import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import AddItem from "./Additem";
import Loader from "./Loader";

class Shopper extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onclickDelete = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    const items = this.props.items;
    return (
      <Container>
        <Loader isLoading={this.props.loading} />
        <AddItem />
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name, quantity }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  {this.props.isAuthenticated ? (
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={() => this.onclickDelete(_id)}
                    >
                      &times;
                    </Button>
                  ) : null}
                  <span style={{ marginLeft: "1rem" }}>{name}</span>
                  <span style={{ float: "right" }}>{quantity}</span>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.item.items,
  loading: state.item.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getItems, deleteItem })(Shopper);
