import './Form.css'
import {useEffect, useState} from "react";
import {ToDo} from "../../types/ToDo.ts";


type FormProps = {
    toDo?: ToDo
    addToDo: (toDo: ToDo) => void
    editToDo: (toDo: ToDo) => void
}
export default function Form({
                                 toDo,
                                 addToDo,
                                 editToDo
                             }: FormProps) {
    const [descriptionInput, setDescriptionInput] = useState<string>("")
    const [selectedStatus, setSelectedStatus] = useState<string>("")
    useEffect(() => {
        if (!toDo) {
            return
        }
        setDescriptionInput(toDo.description)
        setSelectedStatus(toDo.status)
    }, [toDo]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.id === "description-input") {
            setDescriptionInput(event.target.value)
            return
        }
        setSelectedStatus(event.target.value)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        if (descriptionInput.length === 0) {
            return
        }
        if (toDo) {
            const editedToDo: ToDo = {
                id: toDo.id,
                description: descriptionInput,
                status: selectedStatus
            }
            editToDo(editedToDo)
        } else {
            const newToDo: ToDo = {
                id: "",
                description: descriptionInput,
                status: selectedStatus
            }
            addToDo(newToDo)
        }
    }

// console.log(statusInput) // IN_PROGRESS

    return (<div id={"form-wrapper"}>
            {toDo ? <h3 className={"form-headline"}>Edit
                    ToDo</h3> :
                <h3 className={"form-headline"}>Create
                    ToDo</h3>}
            <form onSubmit={handleSubmit} id={"form"}>
                <label
                    id={"description-label"}
                    htmlFor={"description-input"}>Description</label>
                <input id={"description-input"}
                       onChange={handleChange}
                       value={toDo ? descriptionInput : ""}/>
                <label
                    id={"status-label"}
                    htmlFor={"status-select"}>Status</label>
                <select id={"status-select"}
                        onChange={handleChange}
                        value={toDo ? selectedStatus : ""}>
                    <option value={"OPEN"}>To Do</option>
                    <option value={"IN_PROGRESS"}>Doing</option>
                    <option value={"DONE"}>Done</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    )

}