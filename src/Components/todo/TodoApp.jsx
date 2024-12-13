import './TodoApp.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import {TodoComponent} from './TodoComponent'

import AuthProvider, { useAuth } from './security/AuthContext'

export default function TodoApp ()
{
    function AuthenticatedRoute({children})
    {
        const authCheck =useAuth()
        if(authCheck.isAuthenticated) 
            return children

        return <Navigate to="/"/>
    }
    return(
        <div className="TodoApp">
            <BrowserRouter>
            <AuthProvider>
            <HeaderComponent></HeaderComponent>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/welcome/:username' element={
                    <AuthenticatedRoute>
                    <WelcomeComponent />
                    </AuthenticatedRoute>
                    }
                    ></Route>
                    <Route path='*' element={<ErrorComponent/>}></Route>
                    <Route path='/todos' element={
                        <AuthenticatedRoute>
                        <ListTodosComponent/></AuthenticatedRoute>
                    
                    }
                        ></Route>

            <Route path='/todo/:id' element={
                                    <AuthenticatedRoute>
                                    <TodoComponent/></AuthenticatedRoute>
                                
                                }
                                    ></Route>





                    <Route path='/logout' element={
                     
                        <LogoutComponent/>
                        
                        }></Route>
                </Routes>
                </AuthProvider>
            </BrowserRouter>
            <FooterComponent/>
            
        </div>
        
    )
}


