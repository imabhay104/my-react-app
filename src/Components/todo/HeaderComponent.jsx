import { Link } from "react-router-dom"
import { useAuth } from "./security/AuthContext"
export default function HeaderComponent()
{
    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated
function logout()
{
    authContext.logout(false)
}
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" target='_blank
                    ' href="https://www.ferrina.world">ferrina</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                              {isAuthenticated && <Link className="nav-link" to="/welcome/admin">Home</Link>}
                            </li>
                            <li className="nav-item fs-5">
                            {isAuthenticated && <Link className="nav-link" to="/todos">Todos</Link>}
                                </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                        {!isAuthenticated && <Link className="nav-link" to="/">Login</Link>}
                            </li>
                        <li className="nav-item fs-5">
                        {isAuthenticated && <Link className="nav-link" onClick={()=>logout()} to="/logout">Logout</Link>}
                            </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    )
}
