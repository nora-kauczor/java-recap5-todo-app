import {useEffect, useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import {ToDo} from "./types/ToDo.ts";
import axios from "axios";

function App() {
    const [toDos, setToDos] = useState<ToDo[]>([])

    useEffect(() => {
            axios.get("/api/todo")
                .then(response => setToDos(response.data))
                .catch(error => console.log(error))
        }
        ,
        []
    )





    return (
        <>
            <Routes>
                <Route path={"/"} element={<HomePage toDos={toDos}/>}/>
            </Routes>
        </>)
}

export default App
