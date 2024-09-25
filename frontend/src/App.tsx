import {useEffect, useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import {ToDo} from "./types/ToDo.ts";
import axios from "axios";

function App() {
    const [toDos, setToDos] = useState<ToDo[]>([])
    const [usingForm, setUsingForm] = useState<boolean>(false)
    const [toDoToEdit, setToDoToEdit] = useState<ToDo>({}) // empty object

    useEffect(() => {
            axios.get("/api/todo")
                .then(response => setToDos(response.data))
                .catch(error => console.log(error))
        }
        ,
        []
    )


    function openForm(toDo: ToDo): void {
        setUsingForm(true)
        setToDoToEdit(toDo)
    }


    function addToDo(toDo:ToDo):void {
        setToDos([...toDos, toDo])
        setUsingForm(false)
    }

    function editToDo(toDoToEdit:ToDo):void {
        const otherToDos = toDos.filter(toDo => toDo.id !== toDoToEdit.id)
        setToDos([...otherToDos, toDoToEdit])
        setUsingForm(false)
    }


    return (
        <>
            <Routes>
                <Route path={"/"}
                       element={<HomePage toDos={toDos}
                                          addToDo={addToDo}
                                          editToDo={editToDo}
                                          openForm={openForm}
                                          toDoToEdit={toDoToEdit}
                                          usingForm={usingForm}/>}/>
            </Routes>
        </>)
}

export default App
