import { useEffect, useState } from "react"
import { retriveTodosByUsername } from "./api/TodoApiService copy"
import { deletetodoApi } from "./api/TodoApiService copy"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

export default function ListTodosComponent()
{
    const today = new Date()
    const targetDate = new Date(today.getFullYear()+12,today.getMonth(),today.getDay()) 
    const[todos,setTodos] = useState([])
    const[message,setMessage] = useState('')
    const authContext =useAuth()
    const Navigate = useNavigate();
            const username=authContext.username
        
        useEffect(()=>refreshTodos(),[])

        function refreshTodos(){
            console.log('in refresh todo')
            retriveTodosByUsername(username)
            
            .then(response => 
                {
                    setTodos(response.data)
                }
            )
            .catch(error => console.log(error))
        }
        function deleteTodo(id)
        {
            deletetodoApi(username,id)
            .then(() => 
                {
                    setMessage(`${id} is deleted`)
                    refreshTodos()
                }
            )
            .catch(error => console.log(error))
        }
        function updateTodo(id)
        {
                return(
                    Navigate(`/todo/${id}`)
                )
        }
        function addNewTodo()
        {
            return(
                Navigate(`/todo/-1`)
            )
        }

    return(
        <div className='container'>
            <h1>Things you want to do are listed below!!!</h1>
            <div className="alert">{message}</div>
            <div>Todo Details</div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th>Desciption</th>
                        <th>IsDone?</th>
                        <th>Tareget Date</th>
                        <th>Delete</th>
                        <th>Update</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                        todos.map(
                            todo =>(
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={()=>deleteTodo(todo.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={()=>updateTodo(todo.id)}>Update</button></td>

                                </tr>
                            )
                        )
                    }
                    </tbody>


                </table>
                <div className="btn btn-success m-3" onClick={addNewTodo}>Add New Todo</div>
            </div>
        </div>
    )
}
