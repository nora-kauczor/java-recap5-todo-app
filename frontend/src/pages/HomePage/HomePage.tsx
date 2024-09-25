import ToDoOverview
    from "../../components/ToDoOverview/ToDoOverview.tsx";
import {ToDo} from "../../types/ToDo.ts";
type HomePageProps = {toDos:ToDo[]}
export default function HomePage({toDos}:HomePageProps){
// const toDos = props.toDos
    return(<>
        <ToDoOverview toDos={toDos}/>
    </>)
}