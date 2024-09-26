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
           getToDosFromApi()
        }
        , []
    )


    function getToDosFromApi():void {
        axios.get("/api/todo")
            .then(response => setToDos(response.data))
            .catch(error => console.log(error))
    }

    function addToDo(newToDo: ToDo): void {
        // setToDos([...toDos, newToDo])
        setUsingForm(false)
        axios.post("/api/todo", newToDo)
            .then(response => setToDos(response.data))
            .catch(error => console.log(error))
    }

    function editToDo(editedToDo: ToDo): void {
        // const otherToDos = toDos.filter(toDo => toDo.id !== editedToDo.id)
        // setToDos([...otherToDos, toDoToEdit])
        setUsingForm(false)
        axios.put(`/api/todo${editedToDo.id}/update`, editedToDo)
    }

    function deleteToDo(id:string):void{
        axios.delete(`/api/todo${id}`)
            .then(response => setToDos(response.data))
            .catch(error => console.log(error))
    }

    function openForm(id?: string): void {
        setUsingForm(true)
        if (!id) {
            return
        }
        const toDo = toDos.find(toDo => toDo.id === id)
        setToDoToEdit(toDo)
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
                                          usingForm={usingForm}
                                          deleteToDo={deleteToDo}/>}/>
            </Routes>
        </>)
}

export default App
