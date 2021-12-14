import React from 'react';
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoContext } from "../TodoContext/index";
import {Modal} from "../Modal/index"
import { TodoForm } from '../TodoForm';

function AppUI() {


    const { error,
        loading,
        serchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>

                {loading && <p>Estamos Cargando, no desesperes</p>}
                {error && <p>ha ocurrido un error</p>}
                {(!loading && !serchedTodos.length) && <p>Crea tu primer TODO</p>}
                {serchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );

}

export { AppUI };