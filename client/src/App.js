import React, {useEffect, useState} from 'react';
import './App.css';
import { postTask, getTasks } from "./actions"

console.log(process.env)
const App = () => {
    const [taskName, setTaskName] = useState("")
    const [desc, setDesc] = useState("")
    const [data, setData] = useState([])

    const loadData = async () => {
        const response = await getTasks();
        setData(response)
    }

    useEffect(() => {
        loadData()
    }, []);


    const onShortChange = (e) => {
        setTaskName(e.target.value)
    }

    const onLongChange = (e) => {
        setDesc(e.target.value)
    }

    const addNewTask = async () => {
        const response = await postTask(taskName, desc)
        console.log(response)
        if (response !== -1) setData(response)
    }

    return (
        <div className="App">
            <div className="list">
                <h1>TODO LIST</h1>
                <div className="task">
                    <div className="task-short">
                        <h3>Descripcion corta</h3>
                    </div>
                    <div className="task-long">
                         <h3>Descripcion larga</h3>
                    </div>
                    <div className="task-date">
                        <h3>Fecha creacion</h3>
                    </div>
                </div>
                {data.map(task => (
                    <div className="task">
                        <div className="task-short">
                            {task.short_description}
                        </div>
                        <div className="task-long">
                            {task.long_description}
                        </div>
                        <div className="task-date">
                            {new Date(task.createdAt).toDateString()}
                        </div>
                    </div>
                ))}
            </div>
            <div className="add">
                <h1>ADD TODO</h1>
                <form className="form-task" onSubmit={addNewTask}>
                    <label>Descripcion corta: </label>
                    <textarea className="area-short" value={taskName} onChange={onShortChange} cols={20} rows={3} />
                    <label>Descripcion larga: </label>
                    <textarea className="area-long" value={desc} onChange={onLongChange} cols={40} rows={10} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}


export default App;
