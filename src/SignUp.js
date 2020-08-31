import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react'


class SignUp extends Component {


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()
        
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                password: this.state.password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.token = data.token
        })
    }

    render() {
        return(
            <div>
                {/* <h2>Sign Up</h2>
                <form onSubmit={(e)=> this.signUp(e)}>
                    <label>Username: </label>
                    <input onChange={(e) => this.handleChange(e)} name='name' type='text'/>
                    <label>Password: </label>
                    <input onChange={(e) => this.handleChange(e)} name='password' type='password'/>
                    <input type='submit'/>
                </form> */}

            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Icon name='check circle' />
                        Sign Up
                    </Header>
                <form size='large' onSubmit={(e)=> this.signUp(e)}>
                    <Segment stacked>

                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={(e) => this.handleChange(e)} name='name' type='text' />

                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' onChange={(e) => this.handleChange(e)} name='password' type='password'  />
                        <br></br>
                        <Form.Input type='submit'/>
                    </Segment>

                </form>
                <Message>
                    Go back to < Link to='/login'>Login Page</Link>
                </Message>

                </Grid.Column>
            </Grid>

            </div>
        )
    }

}

export default SignUp 