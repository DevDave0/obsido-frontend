import React, { Component } from 'react'
import ShoppingForm from '../components/ShoppingForm'
import ShoppingDoughnutChart from '../components/ShoppingDoughnutChart'
import { Segment, Grid, Image } from 'semantic-ui-react'
import { fetchShopping } from '../actions/index'
import {connect} from 'react-redux';

class ShoppingChart extends Component {

    componentDidMount() {
        this.props.fetchShopping()
    }

    render() {

        const totalShoppingAmount = this.props.shoppingAmount.reduce((a,b)=> a + b, 0)
        this.props.shoppingvalues.unshift(totalShoppingAmount)
        const subtractFromTotal = this.props.shoppingvalues[0] - (this.props.shoppingvalues.slice(1).reduce((a,b)=> a + b, 0))
        this.props.shoppingvalues[0] = subtractFromTotal

        this.props.shoppingnames.unshift('Shopping')

        // console.log(this.props.foods)

        return (
            <div className='main-chart-container'>
            <Segment raised>
                <Grid columns={2} stackable textAlign='center'>
                        <Grid.Row verticalAlign='middle'>
                                <Grid.Column className='column-left'>
                                    {(this.props.allCategories.length > 0) ? 
                                        <ShoppingDoughnutChart 
                                            allCategories={this.props.allCategories}
                                            shoppingnames={this.props.shoppingnames}
                                            shoppingvalues={this.props.shoppingvalues}
                                            shoppingAmount={this.props.shoppingAmount}
                                        />
                                    : 
                                        <Segment placeholder raised loading>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                        </Segment>
                                    }

                                </Grid.Column>

                                <Grid.Column>
                                    <ShoppingForm 
                                            allCategories={this.props.allCategories}
                                            shoppingnames={this.props.shoppingnames}
                                            shoppingvalues={this.props.shoppingvalues}
                                            shoppingAmount={this.props.shoppingAmount}
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
        shopping: state.shopping.shopping,
        shoppingnames: state.shopping.shopping.map(shopping => shopping.name),
        shoppingvalues: state.shopping.shopping.map(shopping => shopping.amount)
    }
}

export default connect(mapStateToProps, { fetchShopping })(ShoppingChart)