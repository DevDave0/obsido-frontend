import React from 'react'
import Counter from '../components/Counter'
import CategoryForm from '../components/CategoryForm'
import DoughnutChart from '../components/DoughnutChart'

const ChartContainer = () => {

    return (
        <div>
            <h1>ChartContainer</h1>
            <DoughnutChart />
            <CategoryForm />
            <Counter />
        </div>
    )
}

export default ChartContainer