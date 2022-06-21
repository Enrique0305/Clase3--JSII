import React from 'react';
import '../styles/TodoCounter.css';
import {AppContext} from '../Context/AppContext';

function TodoCounter({ total, completed }) {
  const { totalTodos, completedTodos } = React.useContext(AppContext);
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };