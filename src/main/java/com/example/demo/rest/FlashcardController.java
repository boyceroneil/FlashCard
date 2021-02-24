package com.example.demo.rest;

import com.example.demo.crud.CRUD;
import com.example.demo.entity.Flashcard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class FlashcardController {
    private final CRUD crud;

    @Autowired
    public FlashcardController(@Qualifier("flashcardIMPL") CRUD crud) {
        this.crud = crud;
    }
    @GetMapping("/receiveFlashcard")
    public List<Object> searchAll(){
        return crud.searchAll();
    }

    @GetMapping("/receiveFlashcard/{flashcard}")
    public Object receiveFlashcard(@PathVariable int flashcard){
        return crud.searchId(flashcard);

    }

    //not tested
    @GetMapping("/retrieveRandomFlashcard")
    public Object retrieveRandomFlashcard(){
        return crud.randomId();
    }

    @PostMapping("/registerFlashcard")
    public Flashcard registerFlashcard(@RequestBody Flashcard flashcard){
        flashcard.setId(0);
        crud.saveUpdate(flashcard);
        return flashcard;
    }
    @PutMapping("/updateFlashcard")
    public Flashcard updateFlashcard(@RequestBody Flashcard flashcard){
        crud.saveUpdate(flashcard);
        return flashcard;
    }
    @DeleteMapping("/deleteFlashcard/{flashcard}")
    public String deleteFlashcard(@PathVariable int flashcard){
        crud.deleteId(flashcard);
        return "Dropped the Flashcard number "+ flashcard;
    }
}
