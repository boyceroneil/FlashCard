import React, { Component } from 'react';
import FlashCardDataService from '../service/FlashCardDataService';

class Card extends Component{
    constructor(){
        super()
        this.state={
            showAnswer:'hidden',
            flashcard: []
        }
        this.clickAnswer = this.clickAnswer.bind(this )
        this.clickNext = this.clickNext.bind(this )
        this.getFlashcard = this.getFlashcard.bind(this)
        
    }
    componentDidMount(){
        this.getFlashcard()
    }
    getFlashcard(){
        FlashCardDataService. retrieveRandomFlashcard()
        .then( response => {
            this.setState({
                flashcard: response.data,
            })
            console.log(response.data)
        })
       
    }
    clickAnswer(){
        this.setState({
            showAnswer: 'visible'
        })
    }
    clickNext(){
        this.getFlashcard()
        this.setState({
            showAnswer: 'hidden'
        })
    }
    render() {
        return(
            <div>
                <table id ='cardTable'>
                    <tr>
                        <td><div className = 'button1'>QUESTION <br></br> {this.state.flashcard.question}</div></td>
                        <td><div className = 'button1' style={{visibility: this.state.showAnswer}}>ANSWER <br></br>{this.state.flashcard.answer}</div></td>
                    </tr>
                    <tr>
                        <td> <button id ="showAnswer " className= "button2"onClick = {this.clickAnswer}>show answer</button></td>
                        <td><button className= "button2" onClick = {this.clickNext}>next card</button></td>
                    </tr>
                </table>
               
            </div>
        )
    }
}
export default Card
