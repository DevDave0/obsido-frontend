import React, {Component} from 'react'


class SignUp extends Component {


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()

    }

    render() {
        return(
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={(e)=> this.signUp(e)}>
                    <label>Username: </label>
                    <input onChange={(e) => this.handleChange(e)} name='name' type='text'/>
                    <label>Password: </label>
                    <input onChange={(e) => this.handleChange(e)} name='password' type='password'/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }

}

export default SignUp 