import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'
// const estilos = {
//     color: 'red',
//     backgroundColor: 'black',
// };
function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    
    return(
        // <h2 style={estilos}>Has Completado 2 de 3 TODOs</h2>
        <h2 className="TodoCounter">Has Completado {completedTodos} de {totalTodos} TODOs</h2>
    );
    
}

export  {TodoCounter};