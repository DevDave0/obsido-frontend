import React from 'react'
import CategoryForm from '../components/CategoryForm'
import DoughnutChart from '../components/DoughnutChart'
import { Segment, Grid, Image } from 'semantic-ui-react'

const MainChart = (props) => {

    return (
        <div className='main-chart-container'>
        {/* <h1>ChartContainer</h1> */}
        <Segment raised>
            <Grid columns={2} stackable textAlign='center'>
                    <Grid.Row verticalAlign='middle'>
                            <Grid.Column className='column-left'>
                                {(props.allCategories.length > 0) ? 
                                    <DoughnutChart 
                                        allCategories={props.allCategories}
                                        stockAmount={props.stockAmount}
                                        cryptoAmount={props.cryptoAmount}
                                        foodAmount={props.foodAmount}
                                        billsAmount={props.billsAmount}
                                        shoppingAmount={props.shoppingAmount}
                                        miscAmount={props.miscAmount}
                                    />
                                : 
                                    <Segment placeholder raised loading>
                                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                        {/* <Header icon>
                                            <Icon name='chart pie' />
                                            No information has been entered yet!
                                        </Header> */}
                                    </Segment>
                                }



                                {/* <DoughnutChart 
                                    allCategories={props.allCategories}
                                    stockAmount={props.stockAmount}
                                    cryptoAmount={props.cryptoAmount}
                                    foodAmount={props.foodAmount}
                                    billsAmount={props.billsAmount}
                                    shoppingAmount={props.shoppingAmount}
                                    miscAmount={props.miscAmount}
                                /> */}
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