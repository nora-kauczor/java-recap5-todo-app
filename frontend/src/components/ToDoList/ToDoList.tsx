import {ToDo} from "../../types/ToDo.ts";
import './ToDoList.css'

type ToDoListProps = {
    title: string,
    toDos: ToDo[],
    openForm: (id?:string) => void
}
export default function ToDoList({
                                     title,
                                     toDos,
                                     openForm
                                 }: ToDoListProps) {

    function handleClick(event: React.FormEvent<HTMLFormElement>) {
        const id = event.target.name
        console.log(id)
        openForm(id)
    }

    return (<div
        id={"todo-container"}
        className={"container"}>
        <h2 className={"todolist-title"}>{title}</h2>
        {toDos.length > 0 && <p>hi</p>}
        {toDos.length > 0 && <ul
            id={"todo-container-list"}
            className={"container-list"}>
            {toDos.map(toDo => <li id={"todo-container-list-item"}
                key={toDo.id}>{toDo.description}
                <button name={toDo.id} id={"todo-container-list-item-button"}
                        onClick={handleClick}>edit
                </button>
            </li>)}
        </ul>
        }

    </div>)
}