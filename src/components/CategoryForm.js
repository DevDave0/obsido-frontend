import React, { useState } from 'react'
import { addCategory } from '../actions/index'
import {connect} from 'react-redux';
import {CATEGORIES} from '../data';

const baseURL = 'http://localhost:3000/'
const categoryURL = baseURL + 'categories'

const CategoryForm = (props) => {

    // take the state we get from the form submit, send it to the reducer with our action
    // within the reducer, we do a POST request to the backend(within the reducer) to create a category with our info within the body
    // once we make the category, we change the state of the piechart accordingly. 

    const [category, setCategory] = useState('Misc')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)

    const submit = (e) => {
        e.preventDefault();
        setAmount(0)
        setCategory('Misc')
        setDescription('')
        // props.addCategory({category, amount, description})
        console.log(category, amount, description)

        let options = {
            method: 'POST',
            headers: {
                'Content-Type' : "application/json"
            },
            body: JSON.stringify({
                name: category,
                amount: amount,
                description: description
            })
        }

        fetch(categoryURL, options)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <h1>CategoryForm</h1>
            <form className='new-category-form' onSubmit={submit} >
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
            </form>
        </div>
    )
}

export default connect(null, {addCategory})(CategoryForm)