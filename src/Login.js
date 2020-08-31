import React, {Component} from 'react'


class Login extends Component {


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/login', {
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
        .then(console.log)
    }

    render() {
        return(
            <div>
                <h2>Login</h2>
                <form onSubmit={(e)=> this.handleSubmit(e)}>
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

export default Login 