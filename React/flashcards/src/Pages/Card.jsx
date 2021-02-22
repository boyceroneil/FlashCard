import React, { Component } from 'react';

class Card extends Component{
    constructor(){
        super()
        this.state={
            showAnswer:'hidden'
        }
        this.clickAnswer = this.clickAnswer.bind(this )
    }
    clickAnswer(){
        this.setState({
            showAnswer: 'visible'
        })
    }
    render() {
        return(
            <div>
                <h1>Card</h1>
                <table id ='homeTable'>
                    <tr>
                        <td><div className = 'button1'>QUESTION</div></td>
                        <td><div className = 'button1' style={{visibility: this.state.showAnswer}}>ANSWER</div></td>
                    </tr>
                </table>
                <button id ="showAnswer "onClick = {this.clickAnswer}>show answer</button>
            </div>
        )
    }
}
export default Card