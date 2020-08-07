import React, { Component } from 'react'
import { Spinner, Container } from 'reactstrap';

export default class Loader extends Component {
    render() {
        return (
            <Container className="spin">
                {this.props.isLoading ?
                    <div className="loading">
                        <Spinner style={{ width: '5rem', height: '5rem' }} type="grow" color="dark" />
                    </div>
                    : null}
            </Container>
        )
    }
}
