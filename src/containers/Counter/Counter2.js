import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux'; // paso 3.1

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter2}/>
                <CounterControl label="Add 1" clicked={this.props.add1}/>
                <CounterControl label="Substract 1" clicked={this.props.sub1}/>
                <CounterControl label="Add 10" clicked={this.props.add10} />
                <CounterControl label="Subtract 10" clicked={this.props.sub10}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => { // paso 3.3
    return { counter2: state.counter}
}

const mapDispatchToProps = (dispatch) => { // paso 3.4
    return { 
        add1: () => {
            return dispatch({type: 'add1'})
        },
        sub1: () => {
            return dispatch({type: 'sub1'})
        },
        add10: () => {
            return dispatch({type: 'add10'})
        },
        sub10: () => {
            return dispatch({type: 'sub10'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // paso 3.2
// mapStateToProps convierte las suscripciones a props
// mapDispatchToProps convierte las acciones a props