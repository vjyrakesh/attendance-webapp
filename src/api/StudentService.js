import axios from 'axios'
import { API_SERVER } from './constants'

class StudentService {
    
    getAllStudents() {
        return axios.get(`${API_SERVER}/students`)
    }

    getOneStudent(id) {
        return axios.get(`${API_SERVER}/students/${id}`)
    }

    addStudentToStandard(id, stdName) {
        return axios.put(`${API_SERVER}/students/${id}/standard`, {name:stdName})
    }
}

export default new StudentService()