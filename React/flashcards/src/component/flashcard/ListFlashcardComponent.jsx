import React, { Component } from 'react'
import FlashCardDataService from '../../service/FlashCardDataService';

class ListFlashcardComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            flashcard: []
        }
        this.refreshListFlashcard = this.refreshListFlashcard.bind(this)
        this.deleteFlashcard = this.deleteFlashcard.bind(this)
        this.updateFlashcard = this.updateFlashcard.bind(this)
        this.addFlashcard = this.addFlashcard.bind(this)

    }
    componentDidMount(){
        this.refreshListFlashcard();
    }
    refreshListFlashcard(){
        FlashCardDataService.retrieveAllFlashcard()
        .then( response => {
            this.setState({
                flashcard: response.data,
            })
        })
    }
    deleteFlashcard(id, question, answer){
        FlashCardDataService.deleteFlashcard(id).then(
            response => {
                this.setState({message: `Deleted Employee: ${question} ${answer}`})
                alert(this.state.message)
                this.refreshListFlashcard();
            }
        )
    }
    updateFlashcard(id, question, answer){
        this.props.history.push(`/UpdateFlashCard/${id}/${question}/${answer}`)
    }
    addFlashcard(){

    }
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>question</th>
                        <th>answer</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.flashcard.map(
                        flashcard=>
                        <tr key={flashcard.id}>
                            <td>{flashcard.id}</td>
                            <td>{flashcard.question}</td>
                            <td>{flashcard.answer}</td>
                            <button onClick= {()=> this.deleteFlashcard(flashcard.id,flashcard.question,flashcard.answer)}>Erase</button>
                            <button onClick = {()=> this.updateFlashcard(flashcard.id, flashcard.question, flashcard.answer)}>Update</button>        
                        </tr>
                    )}
                </tbody>
                
                <button onClick = {()=> this.addFlashcard}>Add a card</button>
            </table>
        )
    }
}
export default ListFlashcardComponent;