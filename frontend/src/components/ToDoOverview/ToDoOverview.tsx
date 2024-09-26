import {ToDo} from "../../types/ToDo.ts";
import ToDoList from "../ToDoList/ToDoList.tsx";
import './ToDoOverview.css'
type ToDoOverviewProps = { toDos: ToDo[],
    openForm: (id?:string) => void,
    deleteToDo: (id?:string) => void
}
export default function ToDoOverview({toDos,openForm, deleteToDo}: ToDoOverviewProps) {
    const toDosStatusToDo: ToDo[] = toDos.filter(toDo => toDo.status === "OPEN")
    const toDosStatusDoing: ToDo[] = toDos.filter(toDo => toDo.status === "IN_PROGRESS")
    const toDosStatusDone: ToDo[] = toDos.filter(toDo => toDo.status === "DONE")
    return (<>
            <div id={"list-wrapper"}>
                <ToDoList title={"To Do"}
                          toDos={toDosStatusToDo} openForm={openForm} deleteToDo={deleteToDo}/>
                <ToDoList title={"Doing"}
                          toDos={toDosStatusDoing} openForm={openForm} deleteToDo={deleteToDo}/>
                <ToDoList
                    title={"Done"} toDos={toDosStatusDone} openForm={openForm} deleteToDo={deleteToDo}/>
            </div>
        </>
    )
}