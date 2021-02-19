package com.example.demo.crud;

import com.example.demo.entity.UserLogin;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class UserLoginIMPL implements CRUD{
    private final EntityManager manager;

    @Autowired
    public UserLoginIMPL(EntityManager manager){
        this.manager = manager;
    }
    @Override
    @Transactional
    public List<Object> searchAll() {
        Session current = manager.unwrap(Session.class);
        Query<Object> query = current.createQuery("from UserLogin");
        return query.getResultList();    }

    @Override
    @Transactional
    public Object searchId(int theId) {
        Session current = manager.unwrap(Session.class);
        return current.get(UserLogin.class, theId);    }

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
        UserLogin login = current.get(UserLogin.class, theId);
        current.delete(login);
    }
}
