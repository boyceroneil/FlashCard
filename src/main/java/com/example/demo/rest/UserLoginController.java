package com.example.demo.rest;

import com.example.demo.crud.CRUD;
import com.example.demo.entity.UserLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class UserLoginController {
    private final CRUD crud;

    @Autowired
    public UserLoginController(@Qualifier("userLoginIMPL")CRUD crud) {
        this.crud = crud;
    }
    @GetMapping("/receiveAllUserLogin")
    public List<Object> searchAll(){
        return crud.searchAll();
    }

    @GetMapping("/receiveUserLogin/{userLogin}")
    public Object receiveUserLogin(@PathVariable int userLogin){
        return crud.searchId(userLogin);

    }
    //not tested
    @GetMapping("/retrieveRandomUserLogin")
    public Object retrieveRandomFlashcard(){
        return crud.randomId();
    }

    @PostMapping("/registerUserLogin")
    public UserLogin registerUserLogin(@RequestBody UserLogin userLogin){
        userLogin.setId(0);
        crud.saveUpdate(userLogin);
        return userLogin;
    }


    @PutMapping("/updateUserLogin")
    public UserLogin updateUserLogin(@RequestBody UserLogin userLogin){
        crud.saveUpdate(userLogin);
        return userLogin;
    }
    @DeleteMapping("/deleteUserLogin/{userLogin}")
    public String deleteUserLogin(@PathVariable int userLogin){

        crud.deleteId(userLogin);
        return "Deleted the user number "+ userLogin +" from the database";
    }
}
