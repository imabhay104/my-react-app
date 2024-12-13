import {createContext, useContext, useState } from "react";
import { authrequestAPI } from "../api/TodoApiService copy";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext()

export const useAuth=()=>useContext(AuthContext)


export default function AuthProvider({children})
{
    const[number,setNumber] = useState(0)
    const[isAuthenticated,setAuthenticated] = useState(false)
    const[username,setUsername] = useState(false)
    const[token,setToken] =useState('')

//     function login(username,password)
// {
//     if (username === 'admin' && password === 'admin') {
//         setAuthenticated(true)
//         setUsername(username)
//         return true
//     } else {
//       setAuthenticated(false)
//       return false
//     }
// }
 async function login(username,password)
{
    const tokenchecker = 'Basic ' + window.btoa(username +":"+ password)
    console.log(tokenchecker)
    try{
        const response=  await authrequestAPI(tokenchecker)
         console.log(response)
    if (response.status==200) {
        setAuthenticated(true)
        setUsername(username)
        setToken((token)=>tokenchecker)

        apiClient.interceptors.request.use(
            (config) => {
                console.log('intercepting and adding a token')
                config.headers.Authorization = tokenchecker
                return config
            }
        )
      
        return true
    } else {
      setAuthenticated(false)
      setToken(null)
      return false
    }
}
catch(error)
{setAuthenticated(false)
    setToken(null)
    return false

}
}

function logout()
{
    setAuthenticated(false)
    setToken(null)
}

    return(
            <AuthContext.Provider value={ {number,isAuthenticated,login,logout,username, token} }>
                {children}
            </AuthContext.Provider>
    )               
}                              