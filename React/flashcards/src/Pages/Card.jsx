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
                <table id ='cardTable'>
                    <tr>
                        <td><div className = 'button1'>QUESTION</div></td>
                        <td><div className = 'button1' style={{visibility: this.state.showAnswer}}>ANSWER</div></td>
                    </tr>
                    <tr>
                        <td> <button id ="showAnswer " className= "button2"onClick = {this.clickAnswer}>show answer</button></td>
                        <td><button className= "button2">next card</button></td>
                    </tr>
                </table>
               
            </div>
        )
    }
}
export default Card