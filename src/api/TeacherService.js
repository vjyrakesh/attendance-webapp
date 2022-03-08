import axios from 'axios'

class TeacherService {
    getAllTeachers() {
        return axios.get("http://localhost:8080/teachers")
    }
}

export default new TeacherService()