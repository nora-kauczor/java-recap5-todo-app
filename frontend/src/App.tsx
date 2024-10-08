import {useEffect, useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import {ToDo} from "./types/ToDo.ts";
import axios from "axios";

function App() {
    const [toDos, setToDos] = useState<ToDo[]>([])
    const [usingForm, setUsingForm] = useState<boolean>(false)
    const [toDoToEdit, setToDoToEdit] = useState<ToDo | undefined>({}) // empty object


    useEffect(() => {
            getToDosFromApi()
        }
        , [toDos]
    )

    function getToDosFromApi(): void {
        axios.get("/api/todo")
            .then(response => setToDos(response.data))
            .catch(error => console.log(error))
    }

    function addToDo(newToDo: ToDo): void {
        setUsingForm(false)
        axios.post("/api/todo", newToDo)
            .then(response => setToDos(response.data))
            .catch(error => console.log(error))
    }

    function editToDo(editedToDo: ToDo): void {
        setUsingForm(false)
        axios.put(`/api/todo/${editedToDo.id}/update`, editedToDo)
            .then(response => setToDos(response.data))
            .catch(error => console.log(error))
    }

    function deleteToDo(id: string): void {
        axios.delete(`/api/todo/${id}`)
            .then(response => setToDos(response.data))
            .catch(error => console.log(error))
    }

    function openForm(id?: string): void {
        setUsingForm(true)
        const toDo:ToDo | undefined = toDos.find(toDo => toDo.id === id)
        if (!toDo) {
            setToDoToEdit(undefined)
            return
        }
        setToDoToEdit(toDo)
    }

    function closeForm(): void {
        setUsingForm(false)
        setToDoToEdit(undefined)
    }

    return (
        <>
            <Routes>
                <Route path={"/"}
                       element={toDos.length > 0 &&
                           <HomePage toDos={toDos}
                                     addToDo={addToDo}
                                     editToDo={editToDo}
                                     openForm={openForm}
                                     toDoToEdit={toDoToEdit}
                                     usingForm={usingForm}
                                     deleteToDo={deleteToDo}
                                     closeForm={closeForm}/>}/>
            </Routes>
        </>)
}

export default App
