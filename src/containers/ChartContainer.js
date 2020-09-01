import React from 'react'
import Counter from '../components/Counter'
import CategoryForm from '../components/CategoryForm'
import Chart from '../components/Chart'

const ChartContainer = () => {

    return (
        <div>
            <h1>ChartContainer</h1>
            <Chart />
            <CategoryForm />
            <Counter />
        </div>
    )
}

export default ChartContainer