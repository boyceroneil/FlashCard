import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FlashCardDataService from '../service/FlashCardDataService';

class EditCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            question: this.props.match.params.question,
            answer: this.props.match.params.answer,
            flashcardList: [],
            flashcard: [],
            flashcardnum: 0
        }
        this.refreshListFlashcard = this.refreshListFlashcard.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange= this.handleChange.bind(this)
        this.nextCard= this.nextCard.bind(this)
        this.deleteCard= this.deleteCard.bind(this)
        this.refreshListFlashcard();
    }
    refreshListFlashcard(){
        FlashCardDataService.retrieveAllFlashcard()
        .then( response => {
            this.setState({
                flashcardList: response.data,
                flashcard:response.data[0],
                question:response.data[0].question,
                answer: response.data[0].answer,
                id:response.data[0].id
            })
        })

    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit(){
        if(!this.state.question == "" && this.state.question != "")
        {
            let flashcard = {
                id: this.state.id,
                question: this.state.question,
                answer: this.state.answer
            }
            FlashCardDataService.updateFlashCard(flashcard)
            alert("card updated")
        }
    }
    nextCard(){
       console.log(this.state.flashcardList.length  )
        if(this.state.flashcardnum == this.state.flashcardList.length - 1)
        {
            
            this.setState({
                flashcardnum: 0,
                flashcard:this.state.flashcardList[0],
                question:this.state.flashcardList[0].question,
                answer:this.state.flashcardList[0].answer,
                id:this.state.flashcardList[0].id
            })
            console.log(this.state.flashcardnum)
        }
        else{
            this.setState({
                flashcard:this.state.flashcardList[this.state.flashcardnum + 1],
                flashcardnum: this.state.flashcardnum + 1,
                question:this.state.flashcard.question,
                answer: this.state.flashcard.answer,
                id:this.state.flashcard.id
            })
        }
    }
    deleteCard(){
        if(this.state.flashcardList.length > 1)
        {
            FlashCardDataService.deleteFlashcard(this.state.id).then(
                response => {
                alert("deleted card!")
                this.refreshListFlashcard();
                }
            )
        }
    }
    render() {
        return(
            
            <div className = "editPage">
                <Link to = "home"><button className = "button3">home</button></Link>
                <table id = "cardInputTable">
                    <tr>
                        <td><h2>QUESTION</h2></td>
                        <td><h2>ANSWER</h2></td>
                    </tr>
                    <tr>
                        <td><textarea className = "cardInput" name = "question" value = {this.state.question} onChange = {this.handleChange}></textarea></td>
                        <td><textarea className = "cardInput" name = "answer" value = {this.state.answer} onChange = {this.handleChange}></textarea></td>
                    </tr>
                 
                </table>
                <table id = "table1">
                    <tr>
                        <button className= "button3" onClick ={this.onSubmit} >SUBMIT</button>
                        <button className= "button3" onClick = {this.deleteCard}>DELETE</button>
                        <button className= "button3" onClick ={this.nextCard} >NEXT CARD</button>
                    </tr>
                </table>
            
            </div>
        )
    }
}

export default EditCard