import {ToDo} from "../../types/ToDo.ts";
import './ToDoCard.css'
import React from "react";
type ToDoCardProps = {
    toDo: ToDo,
    openForm: (id?: string) => void,
    deleteToDo: (id?: string) => void
}

export default function ToDoCard({toDo,
                                     openForm, deleteToDo}:ToDoCardProps) {
    function handleClickEdit(event: React.FormEvent<HTMLFormElement>) {
        const id = event.target.name
        openForm(id)
    }

    function handleClickDelete(event: React.FormEvent<HTMLFormElement>) {
        const id = event.target.name
        deleteToDo(id)
    }

    return (
        <li id={"todo-card"}
            key={toDo.id}>{toDo.description}
            <div id={"todo-card-button-wrapper"}>
            <button name={toDo.id}
                    id={"todo-card-edit-button"}
                    className={"todo-card-button"}
                    onClick={handleClickEdit}>edit
            </button>
            <button name={toDo.id}
                    id={"todo-card-delete-button"}
                    className={"todo-card-button"}
                    onClick={handleClickDelete}>delete
            </button>
            </div>
        </li>)
}