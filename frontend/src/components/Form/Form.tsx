import './Form.css'
import {useEffect, useState} from "react";
import {ToDo} from "../../types/ToDo.ts";


type FormProps = {
    toDo: ToDo
    addToDo: (toDo:ToDo) => void
    editToDo: (toDo:ToDo) => void
}
export default function Form({
                                 toDo,
                                 addToDo,
                                 editToDo
                             }: FormProps) {
    const [descriptionInput, setDescriptionInput] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    useEffect(() => {
        setDescriptionInput(toDo.description)
        setStatus(toDo.status)
    }, [toDo]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setDescriptionInput(event.target.value)
    }
// wofür muss ich hier etwas entgegennehmen???
    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        // descriptionInput.length === 0 && return;
      if (toDo){
          const editedToDo:ToDo = {id:toDo.id, description: descriptionInput, status:status}
          editToDo(editedToDo)
      } else {
          const newToDo:ToDo = {id:"", description: descriptionInput, status:status}
          addToDo(newToDo)
      }
    }


    return (
        <form onSubmit={handleSubmit}>
            <label
                id={"description-label"}
                htmlFor={"description-input"}>Description</label>
            <input id={"description-input"}
                   onChange={handleChange}
                   value={descriptionInput}/>
            <label
                id={"status-label"}
                htmlFor={"status-input"}>Status</label>
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
                    <option>Doing</option>
                    <option selected>Done</option>
                </select>}
        </form>
    )

}