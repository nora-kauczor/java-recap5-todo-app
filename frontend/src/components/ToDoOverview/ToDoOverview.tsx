import {ToDo} from "../../types/ToDo.ts";
import ToDoList from "../ToDoList/ToDoList.tsx";
type ToDoOverviewProps = {toDos: ToDo[]}
export default function ToDoOverview({toDos}:ToDoOverviewProps) {

    return (<>

            <ToDoList/>
        </>
    )
}