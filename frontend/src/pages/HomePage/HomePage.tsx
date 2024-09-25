import ToDoOverview
    from "../../components/ToDoOverview/ToDoOverview.tsx";
import {ToDo} from "../../types/ToDo.ts";

import Form from "../../components/Form/Form.tsx";
import './HomePage.css'

type HomePageProps = {
    toDos: ToDo[]
    addToDo: (toDo:ToDo) => void
    editToDo: (toDo:ToDo) => void
    openForm: (id?:string) => void
    toDoToEdit: ToDo
    usingForm: boolean
}
export default function HomePage({
                                     toDos,
                                     addToDo,
                                     editToDo, openForm, toDoToEdit, usingForm
                                 }: HomePageProps) {




    return (<div id={"homepage"}>
        <ToDoOverview toDos={toDos} openForm={openForm}/>
        {usingForm &&
            <Form addToDo={addToDo} editToDo={editToDo} toDo={toDoToEdit} />}
        <button id={"homepage-create-button"}  type={"button"} onClick={() => openForm()}>Create new ToDo</button>
    </div>)

}