import './App.css';
import TodoList from './TodoList';
import { useState, useRef, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const {current: {value}} = todoNameRef;
    if (value === '') return;
    setTodos(prevTodos => [...prevTodos, {id: prevTodos.length, name: value, complete: false}]);
    todoNameRef.current.value = null;
  }

  const handleAddTodo2 = () => {
    if (inputTodo === '') return;
    setTodos(prevTodos => [...prevTodos, {id: prevTodos.length, name: inputTodo, complete: false}]);
    setInputTodo("");
  }


  const handleClearComplete = () => {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  const toogleComplete = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos)
  }
  useEffect(() => {
    //Runs on every render
    console.log('todo list updated');
  }, [todos]);
  
  const todosProps ={
      todos,toogleComplete
  }
  return (
    <>
      <input type="text" ref={todoNameRef} placeholder="Enter todo"/>
      <input type="text" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} placeholder="Enter todo 2"/>
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleAddTodo2}>Add2</button>
      <button onClick={handleClearComplete}>Clear Complete</button>
      <p>{todos.filter(todo => !todo.complete).length} left to complete</p>
      {/* <TodoList todos={todos} toogleComplete={toogleComplete}/> */}
      <br/>
      <TodoList todosProps={todosProps} />
    </>
  );
}

export default App;
