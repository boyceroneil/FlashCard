import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FlashCardDataService from '../service/FlashCardDataService';

class CreateCard extends Component{
    constructor(props){
        super(props)
        this.state ={
            id: this.props.match.params.id,
            question: '',
            answer: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(){
        if(!this.state.question == "" && this.state.question != "")
        {
            let flashcard ={
                id: this.state.id,
                question: this.state.question,
                answer: this.state.answer
            }
            console.log(flashcard)
            FlashCardDataService.registerFlashcard(flashcard)
            alert("card created!")
            this.setState({
                id: this.state.id + 1
            })
        }

    }
    render() {
        return(
            <div className = "page">
                <h1>CREATE A CARD!</h1>
                <Link to = "home"><button className = "button3">home</button></Link>
                <table id = "cardInputTable">
                    <tr>
                        <td><h2>QUESTION</h2></td>
                        <td><h2>ANSWER</h2></td>
                    </tr>
                    <tr>
                        <td><textarea className = "cardInput" name = "question" onChange={this.handleChange}></textarea></td>
                        <td><textarea className = "cardInput" name = "answer" onChange={this.handleChange}></textarea></td>
                    </tr>
                    
                </table>
                <button className= "button2" onClick = {this.handleSubmit}>SUBMIT</button>
            </div>
        )
    }
}
export default CreateCard