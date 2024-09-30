import {ToDo} from "../../types/ToDo.ts";
import ToDoList from "../ToDoList/ToDoList.tsx";
import './ToDoOverview.css'
import {useEffect, useState} from "react";

type ToDoOverviewProps = {
    toDos: ToDo[],
    openForm: (id?: string) => void,
    deleteToDo: (id: string) => void
}
export default function ToDoOverview({
                                         toDos,
                                         openForm,
                                         deleteToDo
                                     }: ToDoOverviewProps) {
    const [currentToDos, setCurrentToDos] = useState<ToDo[]>([])
    const [doings, setDoings] = useState<ToDo[]>([])
    const [dones, setDones] = useState<ToDo[]>([])

    useEffect(() => {
        if (!toDos) {
            return
        }
        setCurrentToDos(toDos.filter(toDo => toDo.status === "OPEN"))
        setDoings(toDos.filter(toDo => toDo.status === "IN_PROGRESS"))
        setDones(toDos.filter(toDo => toDo.status === "DONE"))
    }, [toDos]);


    return (
        <div id={"todo-overview"}>
            <ToDoList title={"To Do"}
                      toDos={currentToDos}
                      openForm={openForm}
                      deleteToDo={deleteToDo}/>
            <ToDoList title={"Doing"}
                      toDos={doings} openForm={openForm}
                      deleteToDo={deleteToDo}/>
            <ToDoList
                title={"Done"} toDos={dones}
                openForm={openForm}
                deleteToDo={deleteToDo}/>
        </div>
    )
}