import {ToDo} from "../../types/ToDo.ts";
import './ToDoList.css'

type ToDoListProps = {
    title: string,
    toDos: ToDo[],
    openForm: (id?: string) => void,
    deleteToDo: (id?: string) => void
}
export default function ToDoList({
                                     title,
                                     toDos,
                                     openForm, deleteToDo
                                 }: ToDoListProps) {

    function handleClickEdit(event: React.FormEvent<HTMLFormElement>) {
        const id = event.target.name
        console.log(event.target)
        openForm(id)
    }

    function handleClickDelete(event: React.FormEvent<HTMLFormElement>) {
        const id = event.target.name
        deleteToDo(id)
    }

    return (<div
        id={"todo-list-wrapper"}>
        <h2 className={"todolist-title"}>{title}</h2>
        {toDos.length > 0 && <p>hi</p>}
        {toDos.length > 0 && <ul
            id={"todo-list"}
            className={"container-list"}>
            {toDos.map(toDo => <li id={"todo-list-item"}
                                   key={toDo.id}>{toDo.description}
                <button name={toDo.id}
                        id={"todo-list-item-edit-button"}
                        className={"todo-list-item-button"}
                        onClick={handleClickEdit}>edit
                </button>
                <button name={toDo.id}
                        id={"todo-list-item-delete-button"}
                        className={"todo-list-item-button"}
                        onClick={handleClickDelete}>delete
                </button>
            </li>)}
        </ul>
        }

    </div>)
}