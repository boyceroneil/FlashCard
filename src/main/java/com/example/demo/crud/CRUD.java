package com.example.demo.crud;

import java.util.List;

public interface CRUD {
    List<Object> searchAll();
    Object searchId(int theId);
    void saveUpdate(Object object);
    void deleteId(int theId);
}
