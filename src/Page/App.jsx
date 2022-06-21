import React from 'react';
import AppUI from './AppUI';
import { TodoProvider } from '../Context/AppContext';


function App() {
  return (
    <TodoProvider>
    <AppUI />
    </TodoProvider>
  );
}

export default App;
