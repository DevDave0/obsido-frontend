import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {loginUser, loggedIn} from './actions/index';

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
            // console.log(data)
            let result = data.user.data
            if (data.message){
                console.error('Error:', data.message)
            }
            else {
                this.props.loginUser({result})
                this.props.loggedIn()
                localStorage.token = data.token
                localStorage.userId = data.user.data.attributes.id
                localStorage.userName = data.user.data.attributes.name
            }
        })
    }

    render() {
        return(
            <div className='sign-up'>

            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <h1 className='obsido'>obsido</h1>
                    <Segment raised className='sign-up-modal'>
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
                </Segment>
                <Message>
                    Go back to < Link to='/'>Login Page</Link>
                </Message>

                </Grid.Column>
            </Grid>

            </div>
        )
    }

}


export default connect(null, {loginUser, loggedIn})(SignUp)