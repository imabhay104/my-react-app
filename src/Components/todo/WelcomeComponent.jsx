import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"
import { retriveHelloWorldBean,retriveHelloWorldPathVariable,retriveTodosByUsername} from "./api/HelloWorldApiService"
export default function WelcomeComponent()
{
    const {username} = useParams()
    // const value= username
    const[message,setMessage] = useState(null)
    function callHelloWorld()
    {
        // retriveHelloWorldBean()
        //         .then((response)=>success(response))
        //         .catch((response)=>success(response))
        //         .finally(console.log('cleaning'))

        retriveTodosByUsername(username)
                .then((response)=>success(response))
                .catch((response)=>success(response))
                .finally(console.log('cleaning'))

    }

    function success(response)
    {
        setMessage(()=>response.data.message)
        console.log(response)
    }

    return(
        <div className='Welcome'>
           <h1>Welcome to Todo App {username} </h1> 
           <div>
            Manege your Todos: <Link to='/todos'>YouTodos</Link>
           </div>
           <div>
                <button className="btn btn-success m-5" onClick={callHelloWorld}  >Call Hello-World</button>
           </div>
           <div>
                <button className="btn btn-success m-5" onClick={callHelloWorld}  >Call Hello-World Bean</button>
           </div>
          <div className="text-info">{message}</div> 
        </div>
    )
}