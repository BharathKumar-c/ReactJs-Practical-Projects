import React, {useState} from 'react';
import {FaWindowClose} from 'react-icons/fa';
import './styles.css';

const Todos = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const generateUniqueId = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const handleTodos = () => {
    if (input) {
      setTodos((prev) =>
        prev.concat({
          id: generateUniqueId(),
          content: input,
        })
      );
    }
    setInput('');
  };

  return (
    <div className="container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Type todos here.."
          name="todos"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleTodos()}
          value={input}
        />
        <button type="submit" disabled={!input} onClick={handleTodos}>
          Add Todo
        </button>
      </div>
      <div className="todo-content">
        <ul>
          {todos?.length > 0
            ? todos.map((todo) => (
                <li key={todo.id}>
                  {todo.content}{' '}
                  <FaWindowClose
                    size={20}
                    onClick={() => removeTodo(todo.id)}
                  />
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
