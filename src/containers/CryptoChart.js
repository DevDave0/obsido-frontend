import React, { Component } from 'react'
import CryptoForm from '../components/CryptoForm'
import CryptoDoughnutChart from '../components/CryptoDoughnutChart'
import { Segment, Grid, Image } from 'semantic-ui-react'
import { fetchCryptos } from '../actions/index'
import {connect} from 'react-redux';

class CryptoChart extends Component {

    // componentDidMount() {
    //     this.props.fetchCryptos()
    // }

    render() {

        const totalCryptoAmount = this.props.cryptoAmount.reduce((a,b)=> a + b, 0)
        this.props.cryptosvalues.unshift(totalCryptoAmount)
        const subtractFromTotal = this.props.cryptosvalues[0] - (this.props.cryptosvalues.slice(1).reduce((a,b)=> a + b, 0))
        this.props.cryptosvalues[0] = subtractFromTotal

        this.props.cryptosnames.unshift('Crypto')

        // console.log(this.props.foods)

        return (
            <div className='main-chart-container'>
            <Segment raised>
                <Grid columns={2} stackable textAlign='center'>
                        <Grid.Row verticalAlign='middle'>
                                <Grid.Column className='column-left'>
                                    {(this.props.allCategories.length > 0) ? 
                                        <CryptoDoughnutChart 
                                            allCategories={this.props.allCategories}
                                            cryptosnames={this.props.cryptosnames}
                                            cryptosvalues={this.props.cryptosvalues}
                                            cryptosAmount={this.props.cryptosAmount}
                                        />
                                    : 
                                        <Segment placeholder raised loading>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                        </Segment>
                                    }

                                </Grid.Column>

                                <Grid.Column>
                                    <CryptoForm 
                                        allCategories={this.props.allCategories}
                                        cryptosnames={this.props.cryptosnames}
                                        cryptosvalues={this.props.cryptosvalues}
                                        cryptosAmount={this.props.cryptosAmount}
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
        cryptos: state.cryptos.cryptos,
        cryptosnames: state.cryptos.cryptos.map(crypto => crypto.name),
        cryptosvalues: state.cryptos.cryptos.map(crypto => crypto.amount)
    }
}

export default connect(mapStateToProps, { fetchCryptos })(CryptoChart)