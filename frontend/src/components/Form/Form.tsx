import './Form.css'
import {useEffect, useState} from "react";
import {ToDo} from "../../types/ToDo.ts";


type FormProps = {
    toDo?: ToDo
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
        if (!toDo){return}
        setDescriptionInput(toDo.description)
        setStatus(toDo.status)
    }, []);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setDescriptionInput(event.target.value)
    }
// wofür muss ich hier etwas entgegennehmen???
    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        if (descriptionInput.length === 0)
        {
            return
        }
      if (toDo){
          const editedToDo:ToDo = {id:toDo.id, description: descriptionInput, status:status}
          editToDo(editedToDo)
      } else {
          const newToDo:ToDo = {id:"", description: descriptionInput, status:status}
          addToDo(newToDo)
      }
    }


    return (<>
            {toDo ? <h2>Edit ToDo</h2> : <h2>Create ToDo</h2>}
        <form onSubmit={handleSubmit} id={"form"}>
            <label
                id={"description-label"}
                htmlFor={"description-input"}>Description</label>
            <input id={"description-input"}
                   onChange={handleChange}
                   value={toDo ? descriptionInput : ""}/>
            <label
                id={"status-label"}
                htmlFor={"status-input"}>Status</label>
            {!toDo && <select id={"status-select-nothing-selected"} className={"status-select"}>
                <option>To Do</option>
                <option>Doing</option>
                <option>Done</option>
            </select>}
            {toDo && toDo.status === "OPEN" &&
                <select id={"status-select-todo-selected"} className={"status-select"} defaultValue={"To Do"}>
                    <option value={"To Do"}>To Do</option>
                    <option value={"Doing"}>Doing</option>
                    <option value={"Done"}>Done</option>
                </select>}
            {toDo && toDo.status === "IN_PROGRESS" &&
                <select id={"status-select-doing-selected"} className={"status-select"} defaultValue={"Doing"}>
                    <option value={"To Do"}>To Do</option>
                    <option value={"Doing"}>Doing</option>
                    <option value={"Done"}>Done</option>
                </select>}
            {toDo && toDo.status === "DONE" &&
                <select id={"status-select-done-selected"} className={"status-select"} defaultValue={"Done"}>
                    <option value={"To Do"}>To Do</option>
                    <option value={"Doing"}>Doing</option>
                    <option value={"Done"}>Done</option>
                </select>}
            <button>Submit</button>
        </form>
        </>
    )

}