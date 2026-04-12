import axios from 'axios'
import { API_SERVER } from './constants'

class StudentService {
    
    async getAllStudents() {
        try {
            const response = await axios.get(`${API_SERVER}/students`);
            if(response && response.data) {
                return response.data;
            }
        } catch(error) {
            console.error("Error while fetching Teachers: " + error.message);
        }
    }

    getOneStudent(id) {
        return axios.get(`${API_SERVER}/students/${id}`)
    }

    addStudentToStandard(id, stdName) {
        return axios.put(`${API_SERVER}/students/${id}/standard`, {name:stdName})
    }
}

export default new StudentService()