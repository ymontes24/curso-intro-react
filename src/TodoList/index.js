import React from "react";
import './TodoList.css'
function TodoList(props) {
    return (
        <li>
            <ul>
                {props.children}
            </ul>
        </li>
    );

}

export { TodoList };