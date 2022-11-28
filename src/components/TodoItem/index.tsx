import React, {FC, useMemo, useState} from 'react';
import {checkDateExpired} from "../../utils/checkDateExpired";

export interface ITodoItemProps {
    id: number
    title: string
    description: string
    dateComplete: Date
    pinnedFiles: null[]
    completed: boolean
}

const TodoItem: FC<ITodoItemProps> = ({id, title, description, dateComplete, pinnedFiles, completed}) => {
    const [completedState, setCompletedState] = useState<boolean>(completed)
    const taskDateIsExpired = useMemo(() => checkDateExpired(dateComplete), [dateComplete])


    const handleCompletedState = (): void => {
        setCompletedState(!completedState)
    }

    return (
        <div className="AppContent-todo flex-row-betw">
            <div onClick={handleCompletedState} className="cur-pointer p-rel AppContent-todo__completed f-center-row">
                {
                    completedState ? <img className="p-abs" src="img/done.svg" alt=""/> : null
                }
            </div>
            <div className="AppContent-todo__text flex-column d-f">
                <h4>{title}</h4>
                <p className={`todo__date ${taskDateIsExpired && "todo__date-expired"}`}>
                    at {dateComplete.toDateString()} {taskDateIsExpired ? "expired!" : null}
                </p>
                <p className="todo__description">
                    {description}
                </p>
                <div className="todo__pinned d-f al-center gap-10">
                    <img src="img/pin.svg" alt=""/>
                    <span>{pinnedFiles.length ? `${pinnedFiles.length} pinned files` : "pin files"}</span>
                </div>
            </div>
            <div className="AppContent-todo__edit">
                <img src="img/edit.svg" alt=""/>

            </div>
            <div className="AppContent-todo__remove">
                <img src="img/trash.svg" alt=""/>

            </div>

        </div>
    );
};

export default TodoItem;