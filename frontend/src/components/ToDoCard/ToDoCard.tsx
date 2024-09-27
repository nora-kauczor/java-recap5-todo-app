import {ToDo} from "../../types/ToDo.ts";

type ToDoCardProps = {
    toDo: ToDo,
    openForm: (id?: string) => void,
    deleteToDo: (id?: string) => void
}

export default function ToDoCard({toDo,
                                     openForm, deleteToDo}:ToDoCardProps) {
    function handleClickEdit(event: React.FormEvent<HTMLFormElement>) {
        const id = event.target.name
        openForm(id)
    }

    function handleClickDelete(event: React.FormEvent<HTMLFormElement>) {
        const id = event.target.name
        deleteToDo(id)
    }

    return (
        <li id={"todo-list-item"}
            key={toDo.id}>{toDo.description}
            <button name={toDo.id}
                    id={"todo-list-item-edit-button"}
                    className={"todo-list-item-button"}
                    onClick={handleClickEdit}>edit
            </button>
            <button name={toDo.id}
                    id={"todo-list-item-delete-button"}
                    className={"todo-list-item-button"}
                    onClick={handleClickDelete}>delete
            </button>
        </li>)
}