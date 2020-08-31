import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from '../actions/index'

const Chart = () => {
    const counter = useSelector(state => state.counterReducer)
    const isLogged = useSelector(state => state.loggedReducer)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>My Chart</h1>
            <h2>Counter {counter}</h2>
            <button onClick={() => dispatch(increment())} >+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

            {isLogged ? <h3>Valuable information I shouldn't see</h3> : ""}

        </div>
    )
}

export default Chart