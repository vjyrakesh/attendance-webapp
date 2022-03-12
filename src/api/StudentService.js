import axios from 'axios'

class StudentService {
    
    getAllStudents() {
        return axios.get("http://localhost:8080/students")
    }

    getOneStudent(id) {
        return axios.get(`http://localhost:8080/students/${id}`)
    }

    addStudentToStandard(id, stdName) {
        console.log("updating student with id: " + id + " std: " + stdName)
        return axios.put(`http://localhost:8080/students/${id}/standard`, {name:stdName})
    }
}

export default new StudentService()