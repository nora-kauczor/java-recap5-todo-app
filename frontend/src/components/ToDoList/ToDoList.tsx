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
        const id = event.target.id
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
            {toDos.map(toDo => <li
                key={toDo.id}>{toDo.description}
                <button id={toDo.id}
                        onClick={handleClick}>edit
                </button>
            </li>)}
        </ul>
        }

    </div>)
}