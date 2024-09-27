import {ToDo} from "../../types/ToDo.ts";
import './ToDoList.css'
import ToDoCard from "../ToDoCard/ToDoCard.tsx";

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


    return (<div
        id={"todo-list-wrapper"}>
        <h2 className={"todolist-title"}>{title}</h2>
        {toDos.length > 0 && <p>hi</p>}
        {toDos.length > 0 && <ul
            id={"todo-list"}
            className={"container-list"}>
            {toDos.map(toDo => <ToDoCard toDo={toDo}
                                         openForm={openForm}
                                         deleteToDo={deleteToDo}/>)}
        </ul>
        }

    </div>)
}