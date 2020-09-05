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

        return (
            <div className='main-chart-container'>
            <Segment raised>
                <Grid columns={2} stackable textAlign='center'>
                        <Grid.Row verticalAlign='middle'>
                                <Grid.Column className='column-left'>
                                    {(this.props.allCategories.length > 0) ? 
                                        <FoodDoughnutChart 
                                            allCategories={this.props.allCategories}
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

export default connect(null, { fetchFoods })(FoodChart)