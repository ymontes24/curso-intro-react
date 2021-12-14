import React from "react";
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext/index'
//import './App.css';
// const defaultTodos =[
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Tomar intro de react', completed: false},
//   {text: 'Cualquier otra cosa', completed: false}
// ];



function App(props) {


  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  );
}

export default App;
