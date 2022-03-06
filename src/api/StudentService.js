import axios from 'axios'

class StudentService {
    
    getAllStudents() {
        return axios.get("http://localhost:8080/students")
    }
}

export default new StudentService()