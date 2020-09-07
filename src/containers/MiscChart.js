import React, { Component } from 'react'
import MiscForm from '../components/MiscForm'
import MiscDoughnutChart from '../components/MiscDoughnutChart'
import { Segment, Grid, Image } from 'semantic-ui-react'
import { fetchMisc } from '../actions/index'
import {connect} from 'react-redux';

class MiscChart extends Component {

    componentDidMount() {
        this.props.fetchMisc()
    }

    render() {

        const totalMiscAmount = this.props.miscAmount.reduce((a,b)=> a + b, 0)
        this.props.miscvalues.unshift(totalMiscAmount)
        const subtractFromTotal = this.props.miscvalues[0] - (this.props.miscvalues.slice(1).reduce((a,b)=> a + b, 0))
        this.props.miscvalues[0] = subtractFromTotal

        this.props.miscnames.unshift('Misc')

        return (
            <div className='main-chart-container'>
            <Segment raised>
                <Grid columns={2} stackable textAlign='center'>
                        <Grid.Row verticalAlign='middle'>
                                <Grid.Column className='column-left'>
                                    {(this.props.allCategories.length > 0) ? 
                                        <MiscDoughnutChart 
                                            allCategories={this.props.allCategories}
                                            miscnames={this.props.miscnames}
                                            miscvalues={this.props.miscvalues}
                                            miscAmount={this.props.miscAmount}
                                        />
                                    : 
                                        <Segment placeholder raised loading>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                        </Segment>
                                    }

                                </Grid.Column>

                                <Grid.Column>
                                    <MiscForm 
                                            allCategories={this.props.allCategories}
                                            miscnames={this.props.miscnames}
                                            miscvalues={this.props.miscvalues}
                                            miscAmount={this.props.miscAmount}
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
        misc: state.misc.misc,
        miscnames: state.misc.misc.map(misc => misc.name),
        miscvalues: state.misc.misc.map(misc => misc.amount)
    }
}

export default connect(mapStateToProps, { fetchMisc })(MiscChart)