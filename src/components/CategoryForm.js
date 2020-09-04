import React, { useState } from 'react'
import { addCategory } from '../actions/index'
import {connect} from 'react-redux';
import {CATEGORIES} from '../data';
import { Form, Grid, Header, Message, Segment, Icon, Select, Dropdown } from 'semantic-ui-react'

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
        <div>

            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Icon name='check circle' />
                        Add a category
                    </Header>
                    <form onSubmit={submit}>
                        <Segment >

                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Amount' onChange={(e) => setAmount(e.target.value)} value={amount} type='text' />
                        <Dropdown 
                            placeholder='Select a category'
                            fluid
                            selection
                            onChange={handleDropdown}
                            options={CATEGORIES}
                        />

                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Description' onChange={(e) => setDescription(e.target.value)} value={description} type='text' />
                        <Form.Input type='submit'/>
                        </Segment>
                    </form>

                </Grid.Column>

            </Grid>
            {/* <form className='new-category-form' onSubmit={submit} >
                <input placeholder="$Amount" type='text' value={amount} onChange={(e) => setAmount(e.target.value)} />
                <label>
                    Pick a Category
                </label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} >
                        {
                            CATEGORIES.map(category => <option key={category}>{category}</option>)
                        }
                    </select>
                <input placeholder="Description" type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type='submit' value='Add category' />
            </form> */}
        </div>
    )
}

export default connect(null, {addCategory})(CategoryForm)