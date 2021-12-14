import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const { addTodo, setOpenModal } = React.useContext(TodoContext);
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla oara el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm}