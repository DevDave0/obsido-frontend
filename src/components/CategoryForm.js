import React, { useState } from 'react'
import { addCategory } from '../actions/index'
import {connect} from 'react-redux';
import {CATEGORIES} from '../data';
import { Form, Grid, Header, Segment, Icon, Dropdown } from 'semantic-ui-react'

const baseURL = 'http://localhost:3000/'
const categoryURL = baseURL + 'categories'

const CategoryForm = (props) => {

    // take the state we get from the form submit, send it to the reducer with our action
    // within the reducer, we do a POST request to the backend(within the reducer) to create a category with our info within the body
    // once we make the category, we change the state of the piechart accordingly. 

    const [category, setCategory] = useState('Misc')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState()

    const handleDropdown = (event, data) => {
        setCategory(data.value)
    }

    const submit = (e) => {
        e.preventDefault();
        setAmount()
        setCategory('Misc')
        setDescription('')

        let options = {
            method: 'POST',
            headers: {
                'Content-Type' : "application/json"
            },
            body: JSON.stringify({
                name: category,
                amount: amount,
                description: description,
                user_id: localStorage.token
            })
        }

        fetch(categoryURL, options)
        .then(resp => resp.json())
        .then(data => {
            // we send a post to create a category, with the response back we want to set the state in the redux store
            //  once we get the info for the category, we get the sum value of the amount of each category and display that data. 
            // console.log(data)
            // let amount = data.category.data.attributes.amount
            // console.log(data.category.data.attributes.amount)
            // console.log(data.category.data.attributes)
            let category = data.category.data.attributes
            props.addCategory(category)
        })
    }

    return (
        <div className='main-chart-container-form'>

            <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Icon name='plus circle' />
                        Add a category
                    </Header>
                    <form onSubmit={submit}>
                        <Segment >
                        
                        <div className="ui pointing below label">
                            Please enter the amount of money
                        </div>
                        
                        <Form.Input fluid icon='dollar sign' iconPosition='left' placeholder='Amount' onChange={(e) => setAmount(e.target.value)} value={amount} type='text' />
                        <br></br>

                        <div className="ui pointing below label">
                            Please choose a category
                        </div>

                        <Dropdown 
                            placeholder='Category'
                            fluid
                            selection
                            onChange={handleDropdown}
                            options={CATEGORIES}
                        />
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

export default connect(null, {addCategory})(CategoryForm)