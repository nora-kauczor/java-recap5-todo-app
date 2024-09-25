package de.neuefische.backend.todo;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
class TodoRepository {

    private final Map<String, Todo> todos = new HashMap<>(Map.of("1", new Todo("1", "Test", TodoStatus.OPEN)));
//    todos.put("2", new Todo("2", "Finish homework", TodoStatus.OPEN));
//        todos.put("3", new Todo("3", "Go grocery shopping", TodoStatus.OPEN));
//        todos.put("4", new Todo("4", "Clean the house", TodoStatus.OPEN));
//        todos.put("5", new Todo("5", "Pay bills", TodoStatus.OPEN));
//        todos.put("6", new Todo("6", "Schedule a doctor's appointment", TodoStatus.OPEN));
//        todos.put("7", new Todo("7", "Prepare presentation", TodoStatus.OPEN));
//        todos.put("8", new Todo("8", "Update resume", TodoStatus.OPEN));
//        todos.put("9", new Todo("9", "Plan a trip", TodoStatus.OPEN));
//        todos.put("10", new Todo("10", "Call mom", TodoStatus.OPEN));;


    public List<Todo> getAll() {
        return new ArrayList<>(todos.values());
    }

    public Todo save(Todo todoToSave) {
        todos.put(todoToSave.id(), todoToSave);
        return todoToSave;
    }

    public Todo getById(String id) {
        return todos.get(id);
    }

    public Todo update(Todo todo) {
        todos.put(todo.id(), todo);
        return todo;
    }

    public void delete(String id) {
        todos.remove(id);
    }
}
