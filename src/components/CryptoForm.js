import React, { useState } from 'react'
import { Form, Grid, Header, Segment, Icon, Dropdown} from 'semantic-ui-react'
import {connect} from 'react-redux';
import { addCryptos } from '../actions/index'
import cryptocurrencies from 'cryptocurrencies'

const baseURL = 'http://localhost:3000/'
const cryptosURL = baseURL + 'cryptos'

// const allCryptos = cryptocurrencies.split(',')
const cryptoObjectArray = [];
for (const [key, value] of Object.entries(cryptocurrencies)) {
    cryptoObjectArray.push({value:`${key}|${value}`, key: key, text: `${key} | ${value}`})
  }


const CryptoForm = (props) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState()
    const [ticker, setTicker] = useState()

    // function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }

    const cryptosCategoryId = props.allCategories.filter(category => {
        if (category.name === "Crypto"){
            return category
        }
    })

    const handleDropdown = (event, data) => {
        // console.log(data)
        // setCategory(data.value)
        // console.log(data.value)
        let splitCrypto = data.value.split('|')
        setTicker(splitCrypto[0])
        setName(splitCrypto[1])
    }



    const clearState = () => {
        setName('')
        setDescription('')
        setAmount(0)
    }

    const submit = (e) => {
        e.preventDefault();
        setAmount()
        setName('')
        setDescription('')

        let options = {
            method: 'POST',
            headers: {
                'Content-Type' : "application/json"
            },
            body: JSON.stringify({
                name: name,
                amount: amount,
                ticker: ticker,
                description: description,
                category_id: cryptosCategoryId[0].id
            })
        }

        fetch(cryptosURL, options)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data)
            let cryptosObject = data.crypto.data.attributes
            props.addCryptos(cryptosObject)
            localStorage.cryptosCategoryId = data.crypto.data.relationships.category.data.id
        })
        clearState();
    }

    return (
        <div className='cryptos-chart-container-form'>

            {/* {console.log(cryptocurrencies)} */}
            {/* {console.log(cryptoObjectArray)} */}

            <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Icon name='plus circle' />
                        Add a Cryptocurrency
                    </Header>
                    <form onSubmit={(e)=>{ props.cryptosvalues[0] > 0 ? submit(e) : alert("Not enough money!")}}>
                        <Segment raised>

                        <div className="ui pointing below label">
                            Please choose a Cryptocurrency
                        </div>
                        <Dropdown
                            placeholder='Select a Cryptocurrency'
                            fluid
                            search
                            selection
                            onChange={handleDropdown}
                            options={cryptoObjectArray}
                        />
                        {/* <Form.Input fluid icon='edit' iconPosition='left' placeholder='e.g. Bitcoin, Ethereum, XRP...' onChange={(e) => setName(e.target.value)} value={name} type='text' /> */}

                        <br></br>

                        
                        <div className="ui pointing below label">
                            Please enter the amount of money spent.
                        </div>

                        <Form.Input fluid icon='dollar sign' iconPosition='left' placeholder='Amount' onChange={(e) => setAmount(e.target.value)} value={amount} type='text' />
                        <br></br>

                        <div className="ui pointing below label">
                            Write a memo!
                        </div>
                        <Form.Input fluid icon='book' iconPosition='left' placeholder='Description' onChange={(e) => setDescription(e.target.value)} value={description} type='text' />
                        <br></br>
                        <input type="submit" value="Submit" className="ui fluid teal button big"/>
                        <br></br>
                        </Segment>
                    </form>

                </Grid.Column>

            </Grid>

        </div>
    )
}


export default connect(null, { addCryptos })(CryptoForm)