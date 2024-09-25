import ToDoOverview
    from "../../components/ToDoOverview/ToDoOverview.tsx";
import {ToDo} from "../../types/ToDo.ts";

import Form from "../../components/Form/Form.tsx";

type HomePageProps = {
    toDos: ToDo[]
    addToDo: (toDo:ToDo) => void
    editToDo: (toDo:ToDo) => void
    openForm: (toDo:ToDo) => void
    toDoToEdit: ToDo
    usingForm: boolean
}
export default function HomePage({
                                     toDos,
                                     addToDo,
                                     editToDo, openForm, toDoToEdit, usingForm
                                 }: HomePageProps) {




    return (<>
        <ToDoOverview toDos={toDos} openForm={openForm}/>
        {usingForm &&
            <Form addToDo={addToDo} editToDo={editToDo} toDo={toDoToEdit} />}
    </>)
}