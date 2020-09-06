import React, { Component } from 'react'
import FoodForm from '../components/FoodForm'
import FoodDoughnutChart from '../components/FoodDoughnutChart'
import { Segment, Grid, Image } from 'semantic-ui-react'
import { fetchFoods } from '../actions/index'
import {connect} from 'react-redux';

class FoodChart extends Component {

    componentDidMount() {
        this.props.fetchFoods()
    }


    render() {

        const totalFoodAmount = this.props.foodAmount.reduce((a,b)=> a + b, 0)
        this.props.foodvalues.unshift(totalFoodAmount)
        const subtractFromTotal = this.props.foodvalues[0] - (this.props.foodvalues.slice(1).reduce((a,b)=> a + b, 0))
        this.props.foodvalues[0] = subtractFromTotal

        this.props.foodnames.unshift('Food')

        console.log(this.props.foods)

        return (
            <div className='main-chart-container'>
            <Segment raised>
                <Grid columns={2} stackable textAlign='center'>
                        <Grid.Row verticalAlign='middle'>
                                <Grid.Column className='column-left'>
                                    {(this.props.allCategories.length > 0) ? 
                                        <FoodDoughnutChart 
                                            allCategories={this.props.allCategories}
                                            foodnames={this.props.foodnames}
                                            foodvalues={this.props.foodvalues}
                                            foodAmount={this.props.foodAmount}
                                        />
                                    : 
                                        <Segment placeholder raised loading>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                        </Segment>
                                    }

                                </Grid.Column>

                                <Grid.Column>
                                    <FoodForm 
                                        allCategories={this.props.allCategories}
                                        foodnames={this.props.foodnames}
                                        foodvalues={this.props.foodvalues}
                                        foodAmount={this.props.foodAmount}
                                    />
                                </Grid.Column>
                            
                        </Grid.Row>
                </Grid>
            </Segment>
        </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        foods: state.food.foods,
        foodnames: state.food.foods.map(food => food.name),
        foodvalues: state.food.foods.map(food => food.amount)
    }
}

export default connect(mapStateToProps, { fetchFoods })(FoodChart)