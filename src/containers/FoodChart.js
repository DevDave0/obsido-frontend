import React from 'react'
import FoodForm from '../components/FoodForm'
import FoodDoughnutChart from '../components/FoodDoughnutChart'
import { Segment, Grid, Image } from 'semantic-ui-react'

const FoodChart = (props) => {

    return (
        <div className='main-chart-container'>
        <h1>Food</h1>
        <Segment raised>
            <Grid columns={2} stackable textAlign='center'>
                    <Grid.Row verticalAlign='middle'>
                            <Grid.Column className='column-left'>
                                {(props.allCategories.length > 0) ? 
                                    <FoodDoughnutChart 
                                        allCategories={props.allCategories}
                                        foodAmount={props.foodAmount}
                                    />
                                : 
                                    <Segment placeholder raised loading>
                                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                    </Segment>
                                }

                            </Grid.Column>

                            <Grid.Column>
                                <FoodForm 
                                    allCategories={props.allCategories}
                                    foodAmount={props.foodAmount}
                                />
                            </Grid.Column>
                        
                    </Grid.Row>
            </Grid>
        </Segment>
    </div>
    )
}

export default FoodChart