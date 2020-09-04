import React from 'react'
import CategoryForm from '../components/CategoryForm'
import DoughnutChart from '../components/DoughnutChart'

const FoodChart = (props) => {

    return (
        <div className='main-chart-container'>
        <h1>FoodContainer</h1>

        <DoughnutChart 
            allCategories={props.allCategories}
            stockAmount={props.stockAmount}
            cryptoAmount={props.cryptoAmount}
            foodAmount={props.foodAmount}
            billsAmount={props.billsAmount}
            shoppingAmount={props.shoppingAmount}
            miscAmount={props.miscAmount}
        />
        <CategoryForm />
    </div>
    )
}

export default FoodChart