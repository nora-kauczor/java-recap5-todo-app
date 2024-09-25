import './Form.css'
import {useState} from "react";
import {ToDo} from "../../types/ToDo.ts";

type FormProps = { toDo: ToDo
addToDo: () => void
editToDo: () => void
}
export default function Form({toDo, addToDo, editToDo}: FormProps) {
    const [descriptionInput, setDescriptionInput] = useState<string>(toDo.description)
    const [status, setStatus] = useState<string>(toDo.status)

    function handleSubmit(){

// close form
    }



    return (
        <form onSubmit={handleSubmit}>
            <label
                id={"description-label"}>Description</label>
            <input id={"description-input"}/>
            <label
                id={"status-label"}>Description</label>
            {!toDo && <select id={"status-select"}>
                <option>To Do</option>
                <option>Doing</option>
                <option>Done</option>
            </select>}
            {toDo.status === "To Do" &&
                <select id={"status-select"}>
                    <option selected>To Do</option>
                    <option>Doing</option>
                    <option>Done</option>
                </select>}
            {toDo.status === "Doing" &&
                <select id={"status-select"}>
                    <option>To Do</option>
                    <option selected>Doing</option>
                    <option>Done</option>
                </select>}
            {toDo.status === "Done" &&
                <select id={"status-select"}>
                    <option>To Do</option>
                    <option >Doing</option>
                    <option selected>Done</option>
                </select>}
        </form>
    )

}