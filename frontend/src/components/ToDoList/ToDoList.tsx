import {ToDo} from "../../types/ToDo.ts";

type ToDoListProps = {toDos:ToDo[]}
export default function ToDoList({toDos}:ToDoListProps){

    return (<div
        id={"todo-container"}
        className={"container"}>
        {toDos.length > 0 && <h2
            id={"todo-container-title"}
            className={"container-title"}>{toDos[0].status}</h2>}
        <ul
            id={"todo-container-list"}
            className={"container-list"}>
        </ul>

    </div>)
}