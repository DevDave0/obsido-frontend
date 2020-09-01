import React, { useState } from 'react'
import { addCategory } from '../actions/index'


const CategoryForm = () => {

    // take the state we get from the form submit, send it to the reducer with our action
    // within the reducer, we do a POST request to the backend(within the reducer) to create a category with our info within the body
    // once we make the category, we change the state of the piechart accordingly. 
    return (
        <div>
            <h1>CategoryForm</h1>
            <form>
                <input placeholder="Amount" type='text' />
                <input type='submit' value='Add category' />
            </form>
        </div>
    )
}

export default CategoryForm