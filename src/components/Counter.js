import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from '../actions/index'

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.login)
    const dispatch = useDispatch();

    return (
        <div>
            <br></br>
            <h1>test counter</h1>
            <h2>Counter {counter}</h2>
            <button onClick={() => dispatch(increment())} >+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

            {isLogged ? <h3>Valuable information I shouldn't see</h3> : ""}

            {/* <h3>Valuable information I shouldn't see</h3> */}
        </div>
    )
}

export default Counter