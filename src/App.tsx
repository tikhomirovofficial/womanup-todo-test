import React, {useEffect, useMemo, useState} from 'react';
import TodoItem, {ITodoItemProps} from "./components/TodoItem";

function App() {
    const [todos, setTodos] = useState<ITodoItemProps[]>([
        {
            id: 1,
            title: "Create-todo-app",
            description: "Creating",
            dateComplete: new Date("2022-11-30"),
            pinnedFiles: [null, null, null],
            completed: true
        },
        {
            id: 2,
            title: "Create-todo-app-2",
            description: "Creating",
            dateComplete: new Date("1992-08-15"),
            pinnedFiles: [null, null, null, null],
            completed: true
        },
        {
            id: 3,
            title: "Create-todo-app-2",
            description: "Creating",
            dateComplete: new Date("1992-08-15"),
            pinnedFiles: [null, null, null, null],
            completed: false
        }
    ])
    const changeFieldTodo = (todo_id: number, field: keyof ITodoItemProps, value: ITodoItemProps[keyof ITodoItemProps]): void => {
        setTodos(prev => prev.map(item => {
            if(item.id === todo_id) {
                const changedTodo = item as any;
                changedTodo[field] = value
                return changedTodo
            }
            return item
        }))
    }

    const lengthCompletedTodos = useMemo(() => {
        return todos.reduce((acc, cur) => {
            if(cur.completed) {
                return acc + 1
            }
            return acc
        }, 0)
    }, [todos])

    return (
        <div className="App">
            <div className="wrapper">
                <div className="AppContent flex-column">
                    <div className="AppContent-top">
                        <div className="AppContent-top__date">
                            <b>Monday</b>, 3 Dec
                        </div>
                        <div className="AppContent-top__total flex-row-betw">
                            <div className="gap-5 flex-column">
                                <b>{todos.length < 10 ? `0${todos.length}` : todos.length}</b>
                                <p>Created Tasks</p>
                            </div>
                            <div className="gap-5 flex-column">
                                <b className="txt-right">{lengthCompletedTodos < 10 ? `0${lengthCompletedTodos}` : lengthCompletedTodos}</b>
                                <p>Completed Tasks</p>
                            </div>
                        </div>
                    </div>
                    <div className="AppContent-todos flex-column">
                        {
                            todos.map(item => (
                                <TodoItem id={item.id} title={item.title} description={item.description}
                                          dateComplete={item.dateComplete} pinnedFiles={item.pinnedFiles} completed={item.completed}/>
                            ))
                        }
                    </div>

                    <div className="AppContent-btn f-center-row">
                        <img src="img/plus.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
