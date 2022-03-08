import axios from 'axios'

class SubjectService {
    getAllSubjects() {
        return axios.get("http://localhost:8080/subjects")
    }
}

export default new SubjectService()