import React, { Component } from 'react'
import BillsForm from '../components/BillsForm'
import BillsDoughnutChart from '../components/BillsDoughnutChart'
import { Segment, Grid, Image } from 'semantic-ui-react'
import { fetchBills } from '../actions/index'
import {connect} from 'react-redux';

class BillsChart extends Component {

    componentDidMount() {
        this.props.fetchBills()
    }

    render() {

        const totalBillsAmount = this.props.billsAmount.reduce((a,b)=> a + b, 0)
        this.props.billsvalues.unshift(totalBillsAmount)
        const subtractFromTotal = this.props.billsvalues[0] - (this.props.billsvalues.slice(1).reduce((a,b)=> a + b, 0))
        this.props.billsvalues[0] = subtractFromTotal

        this.props.billsnames.unshift('Bills')

        // console.log(this.props.foods)

        return (
            <div className='main-chart-container'>
            <Segment raised>
                <Grid columns={2} stackable textAlign='center'>
                        <Grid.Row verticalAlign='middle'>
                                <Grid.Column className='column-left'>
                                    {(this.props.allCategories.length > 0) ? 
                                        <BillsDoughnutChart 
                                            allCategories={this.props.allCategories}
                                            billsnames={this.props.billsnames}
                                            billsvalues={this.props.billsvalues}
                                            billsAmount={this.props.billsAmount}
                                        />
                                    : 
                                        <Segment placeholder raised loading>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                        </Segment>
                                    }

                                </Grid.Column>

                                <Grid.Column>
                                    <BillsForm 
                                        allCategories={this.props.allCategories}
                                        billsnames={this.props.billsnames}
                                        billsvalues={this.props.billsvalues}
                                        billsAmount={this.props.billsAmount}
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
        bills: state.bills.bills,
        billsnames: state.bills.bills.map(bill => bill.name),
        billsvalues: state.bills.bills.map(bill => bill.amount)
    }
}

export default connect(mapStateToProps, { fetchBills })(BillsChart)