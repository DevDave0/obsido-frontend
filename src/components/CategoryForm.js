import React, { useState } from 'react'
import { addCategory } from '../actions/index'
import {connect} from 'react-redux';
import {CATEGORIES} from '../data';

const CategoryForm = (props) => {

    // take the state we get from the form submit, send it to the reducer with our action
    // within the reducer, we do a POST request to the backend(within the reducer) to create a category with our info within the body
    // once we make the category, we change the state of the piechart accordingly. 

    const [category, setCategory] = useState('Misc')

    const submit = (e) => {
        e.preventDefault();
        setCategory('Misc')
        props.addCategory({category})
    }

    return (
        <div>
            <h1>CategoryForm</h1>
            <form>
                <input placeholder="$Amount" type='text' />
                <label>
                    Pick a Category
                </label>
                    <select>
                        {
                            CATEGORIES.map(category => <option key={category}>{category}</option>)
                        }
                    </select>
                <input placeholder="Description" type='text' />
                <input type='submit' value='Add category' />
            </form>
        </div>
    )
}

export default connect(null, addCategory)(CategoryForm)