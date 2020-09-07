import React, { useState } from 'react'
import { Form, Grid, Header, Segment, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux';
import { addFoodName } from '../actions/index'

const baseURL = 'http://localhost:3000/'
const subcategoryURL = baseURL + 'sub_categories'

// Here we want to add a slider to the form to choose how much we want to spend on a certain item.

const FoodForm = (props) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState()

    // function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }

    const foodCategoryId = props.allCategories.filter(category => {
        if (category.name === "Food"){
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
                category_id: foodCategoryId[0].id
            })
        }

        fetch(subcategoryURL, options)
        .then(resp => resp.json())
        .then(data => {

            // console.log(data)
            let foodObject = data.category.data.attributes
            props.addFoodName(foodObject)
            // console.log(data.category.data.relationships.category.data.id)
            localStorage.foodCategoryId = data.category.data.relationships.category.data.id
        })
        clearState();
    }

    return (
        <div className='food-chart-container-form'>

            {console.log(props.foodvalues[0])}

            <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Icon name='plus circle' />
                        Add a Food
                    </Header>
                    <form onSubmit={(e)=>{ props.foodvalues[0] > 0 ? submit(e) : alert("Not enough money!")}}>
                        <Segment raised>

                        {/* <div className="ui label"> 
                            {`$${numberWithCommas(props.foodvalues[0])} left in food money`}
                        </div> */}

                        <div className="ui pointing below label">
                            Please input a name.
                        </div>
                        <Form.Input fluid icon='edit' iconPosition='left' placeholder='e.g. Lunch, Dinner, Groceries...' onChange={(e) => setName(e.target.value)} value={name} type='text' />

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

// const mapStateToProps = state => {
//     return {
//         foodvalues: state.food.foods.map(food => food.amount)
//     }
// }

export default connect(null, { addFoodName })(FoodForm)