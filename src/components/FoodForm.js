import React, { useState } from 'react'
import {CATEGORIES} from '../data';
import { Form, Grid, Header, Segment, Icon, Dropdown } from 'semantic-ui-react'

const baseURL = 'http://localhost:3000/'
const subcategoryURL = baseURL + 'sub_categories'

// Here we want to add a slider to the form to choose how much we want to spend on a certain item.

const FoodForm = (props) => {

    const [category, setCategory] = useState('Misc')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState()

    const handleDropdown = (event, data) => {
        setCategory(data.value)
    }

    const clearState = () => {
        setCategory('')
        setDescription('')
        setAmount(0)
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

        fetch(subcategoryURL, options)
        .then(resp => resp.json())
        .then(data => {
            let category = data.category.data.attributes
            props.addCategory(category)
        })
        clearState();
    }

    return (
        <div className='main-chart-container-form'>

            <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Icon name='plus circle' />
                        Add a Food
                    </Header>
                    <form onSubmit={submit}>
                        <Segment raised>
                        
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

export default FoodForm