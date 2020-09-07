import React, { Component } from 'react'
import StockForm from '../components/StockForm'
import StockDoughnutChart from '../components/StockDoughnutChart'
import { Segment, Grid, Image } from 'semantic-ui-react'
import { fetchStock } from '../actions/index'
import {connect} from 'react-redux';

class StockChart extends Component {

    // componentDidMount() {
    //     this.props.fetchStock()
    // }

    render() {

        const totalStockAmount = this.props.stockAmount.reduce((a,b)=> a + b, 0)
        this.props.stockvalues.unshift(totalStockAmount)
        const subtractFromTotal = this.props.stockvalues[0] - (this.props.stockvalues.slice(1).reduce((a,b)=> a + b, 0))
        this.props.stockvalues[0] = subtractFromTotal

        this.props.stocknames.unshift('Stocks')


        return (
            <div className='main-chart-container'>
            <Segment raised>
                <Grid columns={2} stackable textAlign='center'>
                        <Grid.Row verticalAlign='middle'>
                                <Grid.Column className='column-left'>
                                    {(this.props.allCategories.length > 0) ? 
                                        <StockDoughnutChart 
                                            allCategories={this.props.allCategories}
                                            stocknames={this.props.stocknames}
                                            stockvalues={this.props.stockvalues}
                                            stockAmount={this.props.stockAmount}
                                        />
                                    : 
                                        <Segment placeholder raised loading>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                        </Segment>
                                    }

                                </Grid.Column>

                                <Grid.Column>
                                    <StockForm 
                                        allCategories={this.props.allCategories}
                                        stocknames={this.props.stocknames}
                                        stockvalues={this.props.stockvalues}
                                        stockAmount={this.props.stockAmount}
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
        stock: state.stock.stock,
        stocknames: state.stock.stock.map(stock => stock.name),
        stockvalues: state.stock.stock.map(stock => stock.amount)
    }
}

export default connect(mapStateToProps, { fetchStock })(StockChart)