import axios from 'axios'

class FlashCardDataService{
    //receive all flashcards
    retrieveAllFlashcard(){
        return axios.get(`http://localhost:8080/receiveFlashcard`);
    }
    //retrieve random number flashcard
    retrieveRandomFlashcard(){
        return axios.get(`http://localhost:8080/retrieveRandomFlashcard`);

    }

    //receive a flashcard
    receiveFlashcard(id){
        return axios.get(`http://localhost:8080/receiveFlashcard/${id}`);

    }
    updateFlashCard(flashcard){
        return axios.put(`http://localhost:8080/updateFlashcard/`, flashcard)

    }
    //add flashcard
    registerFlashcard(flashcard){
        return axios.post(`http://localhost:8080/registerFlashcard/`, flashcard)

    }

    //delete flashcard
    deleteFlashcard(id){
        return axios.delete(`http://localhost:8080/deleteFlashcard/${id}`)

    }
}
export default new FlashCardDataService()