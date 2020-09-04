import React from 'react'
import CategoryForm from '../components/CategoryForm'
import DoughnutChart from '../components/DoughnutChart'
import { Segment, Divider, Grid } from 'semantic-ui-react'

const MainChart = (props) => {

    return (
        <div className='main-chart-container'>
        {/* <h1>ChartContainer</h1> */}
        <Segment raised>
            <Grid columns={2} stackable textAlign='center'>
                {/* <Divider vertical>Or    </Divider> */}
                    <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <DoughnutChart 
                                    allCategories={props.allCategories}
                                    stockAmount={props.stockAmount}
                                    cryptoAmount={props.cryptoAmount}
                                    foodAmount={props.foodAmount}
                                    billsAmount={props.billsAmount}
                                    shoppingAmount={props.shoppingAmount}
                                    miscAmount={props.miscAmount}
                                />
                            </Grid.Column>

                            <Grid.Column>
                                <CategoryForm />
                            </Grid.Column>
                        
                    </Grid.Row>
            </Grid>
        </Segment>
        {/* <DoughnutChart 
            allCategories={props.allCategories}
            stockAmount={props.stockAmount}
            cryptoAmount={props.cryptoAmount}
            foodAmount={props.foodAmount}
            billsAmount={props.billsAmount}
            shoppingAmount={props.shoppingAmount}
            miscAmount={props.miscAmount}
        />
        <CategoryForm /> */}
    </div>
    )
}

export default MainChart