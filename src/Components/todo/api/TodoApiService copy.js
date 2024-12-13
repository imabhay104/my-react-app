import { apiClient } from "./ApiClient"
export const authrequestAPI = (token) => apiClient.get(`/basicauth`,{
    headers: {
        Authorization: token
    }
}
)

export const retriveTodosByUsername = (username) => apiClient.get(`/todos/${username}/listodos`)
export const deletetodoApi = (username,id) => apiClient.delete(`/todos/${username}/todo/${id}`)
export const gettodoApi = (username,id) => apiClient.get(`/todos/${username}/todo/${id}`)
export const updateTodoApi
    = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo)

export const createTodoApi
    = (username,  todo) => apiClient.post(`/users/${username}/todos`, todo)