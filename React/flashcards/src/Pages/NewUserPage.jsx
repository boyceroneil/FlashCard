import React, { Component } from 'react';

class NewUserPage extends Component{
    render() {
        return(
            <div className = "page">
                <form>
                    <h1>welcome new friend, please enter your info below</h1>
                    <h3>username:</h3>
                    <input type = "text" name = "userName" placeholder = "username"/>
                    <h3>password:</h3>
                    <input type = "password" name = "password" placeholder = "password"/>
                    <br></br>
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}
export default NewUserPage