package com.example.demo.crud;

import com.example.demo.entity.Flashcard;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class FlashcardIMPL implements CRUD{
    private final EntityManager manager;
    @Autowired
    public FlashcardIMPL(EntityManager manager) {
        this.manager = manager;
    }

    @Override
    @Transactional
    public List<Object> searchAll() {
        Session current = manager.unwrap(Session.class);
        Query<Object> query = current.createQuery("from Flashcard");
        return query.getResultList();    }


    //testing not sure if it works
    @Override
    @Transactional
    public Object randomId(){
        Session current= manager.unwrap(Session.class);
        Query<Object> query = current.createQuery("from Flashcard order by rand() limit 1");
        return query.getResultList();
    }

    @Override
    @Transactional
    public Object searchId(int theId) {
        Session current = manager.unwrap(Session.class);
        return current.get(Flashcard.class, theId);    }

    @Override
    @Transactional
    public void saveUpdate(Object object) {
        Session current = manager.unwrap(Session.class);
        current.saveOrUpdate(object);
    }

    @Override
    @Transactional
    public void deleteId(int theId) {
        Session current = manager.unwrap(Session.class);
        Flashcard flashcard = current.get(Flashcard.class, theId);
        current.delete(flashcard);
    }
}
