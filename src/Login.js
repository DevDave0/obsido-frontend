import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {loginUser, loggedIn} from './actions/index';

const baseURL = 'http://localhost:3000/'
const loginURL = baseURL + 'login'

class Login extends Component {


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch( loginURL, {
            method: 'POST',
            headers: {
                'Content-Type' : "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                password: this.state.password
            })
        })
        .then( resp => resp.json())
        .then(data => {
            console.log(data.user.data)
            if (data.message){
                console.error('Error:', data.message)
            }
            else {
                this.props.loginUser(data.user.data)
                this.props.loggedIn()
                localStorage.token = data.token
                localStorage.userId = data.user.data.attributes.id
            }
        })
    }

    render() {
        return(
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Icon name='check circle' />
                            Log-in to your account
                        </Header>
                        <form size='large' onSubmit={(e)=> this.handleSubmit(e)}>
                            <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={(e) => this.handleChange(e)} name='name' type='text' />
                            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' onChange={(e) => this.handleChange(e)} name='password' type='password'  />
                            <br></br>
                            <Form.Input type='submit'/>
                            </Segment>
                        </form>
                        <Message>
                            New to us? < Link to='/sign_up'>Sign Up</Link>
                        </Message>

                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}


export default connect(null, { loginUser, loggedIn })(Login)