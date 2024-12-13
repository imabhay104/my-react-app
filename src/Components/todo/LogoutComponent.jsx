import { useAuth } from "./security/AuthContext"

export default function LogoutComponent()
{
    // const contextuse = useAuth()
    // contextuse.setAuthenticated(false)
    return(
        <div className='Logout'>
            <h2>You are Logged out!!</h2>
            <div>Thanks for using our Todo App</div>
        </div>
    )
}