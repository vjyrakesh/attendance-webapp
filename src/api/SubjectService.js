import axios from 'axios'

class SubjectService {
    getAllSubjects() {
        return axios.get("http://localhost:8080/subjects")
    }

    addNewSubject(name) {
        return axios.post(`http://localhost:8080/subjects`, {'name':name})
    }

    addSubjectToStandard(subId, stdId) {
        return axios.put(`http://localhost:8080/subjects/${subId}/standard`, {'id':stdId})
    }

    getOneSubject(id) {
        return axios.get(`http://localhost:8080/subjects/${id}`)
    }
}

export default new SubjectService()