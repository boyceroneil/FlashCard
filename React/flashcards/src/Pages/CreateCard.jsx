import React, { Component } from 'react';

class CreateCard extends Component{
    render() {
        return(
            <div className = "page">
                <h1>CREATE A CARD!</h1>
                <table id = "cardInputTable">
                    <tr>
                        <td><h2>QUESTION</h2></td>
                        <td><h2>ANSWER</h2></td>
                    </tr>
                    <tr>
                        <td><textarea className = "cardInput"></textarea></td>
                        <td><textarea className = "cardInput"></textarea></td>
                    </tr>
                    
                </table>
                <button className= "button2" >SUBMIT</button>
            </div>
        )
    }
}
export default CreateCard