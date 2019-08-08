import React, { Component } from 'react'

class SignIn extends Component  
{
    state = 
    {
        email:'',
        password:''
    }
    handleSubmit = (e) => {
      this.setState(
          {
            [e.target.id]: e.target.value
          })
    }
    handleChange = (e) => {
      e.preventDefault();
      console.log(this.state);
    }
    render()
    {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}  className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" onChange={this.handleChange}/>     
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" onChange={this.handleChange}/>     
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light" type="submit" name="action">submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn