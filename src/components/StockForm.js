import React, { useState } from 'react'
import { Form, Grid, Header, Segment, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux';
import { addStock } from '../actions/index'
import StockList from '../StockList'

const baseURL = 'http://localhost:3000/'
const stockURL = baseURL + 'stocks'

const seperatedStocks = StockList.match(/[^\r\n]+/g)

const formattedStocks = seperatedStocks.map(stock => {
    return stock.split(' - ')[0]
})

// const resultStocks = () => {
//     result = []
//     seperatedStocks.forEach(stock => {
//         stock.split(' - ')
//     })
// }
// const resultStocks = seperatedStocks.substring(seperatedStocks.indexOf(' -'))


const StockForm = (props) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState()

    // function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }

    const stockCategoryId = props.allCategories.filter(category => {
        if (category.name === "Stocks"){
            return category
        }
    })



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
                description: description,
                category_id: stockCategoryId[0].id
            })
        }

        fetch(stockURL, options)
        .then(resp => resp.json())
        .then(data => {

            let stockObject = data.category.data.attributes
            props.addStock(stockObject)
            localStorage.stockCategoryId = data.category.data.relationships.category.data.id
        })
        clearState();
    }

    return (
        <div className='stock-chart-container-form'>

            {console.log(formattedStocks)}

            <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Icon name='plus circle' />
                        Add a Stock
                    </Header>
                    <form onSubmit={(e)=>{ props.stockvalues[0] > 0 ? submit(e) : alert("Not enough money!")}}>
                        <Segment raised>

                        <div className="ui pointing below label">
                            Please input a name.
                        </div>
                        <Form.Input fluid icon='edit' iconPosition='left' placeholder='e.g. AAPL, AMZN, MSFT, GOOG...' onChange={(e) => setName(e.target.value)} value={name} type='text' />

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


export default connect(null, { addStock })(StockForm)