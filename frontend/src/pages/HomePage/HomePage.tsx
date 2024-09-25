import ToDoOverview
    from "../../components/ToDoOverview/ToDoOverview.tsx";
import {ToDo} from "../../types/ToDo.ts";
import {useState} from "react";
import Form from "../../components/Form/Form.tsx";

type HomePageProps = {
    toDos: ToDo[]
    addToDo: () => void
    editToDo: () => void
}
export default function HomePage({
                                     toDos,
                                     addToDo,
                                     editToDo
                                 }: HomePageProps) {
    const [usingForm, setUsingForm] = useState<boolean>(false)
    const [toDoToEdit, setToDoToEdit] = useState<ToDo>()

    function openForm(toDo:ToDo) {
        setUsingForm(true)
        setToDoToEdit(toDo)
    }

    return (<>
        <ToDoOverview toDos={toDos} openForm={openForm}/>
        {usingForm &&
            <Form addToDo={addToDo} editToDo={editToDo} toDo={toDoToEdit} />}
    </>)
}