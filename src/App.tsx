import { FC, useState } from 'react';
import todosFromServer from './api/todos';
import { getUserById } from './entities/user/utils/getUserById';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import './App.scss';

export const App: FC = () => {
  const [todos, setTodos] = useState(() => {
    return todosFromServer.map(todo => ({
      ...todo,
      user: getUserById(todo.userId),
    }));
  });

  return (
    <div className="App">
      <h1>Add todo form</h1>

      <TodoForm todos={todos} setTodos={setTodos} />

      <TodoList todos={todos} />
    </div>
  );
};
