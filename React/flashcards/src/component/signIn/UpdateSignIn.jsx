import React, { Component } from 'react'
import AccountDataServices from '../../service/AccountDataServices'

class UpdateSignIn extends Component{
    constructor(props){
        super(props)
        this.state ={
            id: this.props.match.id,
            username: '',
            password: ''
        }

    }
    onSubmit(values){
        let account={
            id: this.state.id,
            username: this.state.username,
            password: values.password
        }
        AccountDataServices.retrieveAccount(account).then(()=>this.props.history.push('/UpdateAccount/:id/:username'))
    }
    render(){
        
        return(
            <div>
                <div>
                <h3>Update your account</h3>
                </div>
                <form onSubmit={this.handleSubmit}>
                        
                        <div>
                        <div>
                        <label>Id:</label>
                            <input className="form-control" type="text" value={this.state.id} disabled></input>
                        </div>

                        <label>username</label>
                <input type="text" name="username" ></input>
                        </div>

                        <div>
                        <label>password</label>
                <input type="text" name="password" ></input>
                        </div>

                        <div>
                        <button type="submit">Submit</button>
                        </div>
                    
                    
                    </form>
                </div>

        )
    }
}
export default UpdateSignIn;