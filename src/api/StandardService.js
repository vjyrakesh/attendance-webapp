import axios from 'axios'

class StandardService {
    getAllStandards() {
        return axios.get("http://localhost:8080/standards")
    }

    addStandard(name) {
        return axios.post("http://localhost:8080/standards", {'name':name})
    }

    addClassTeacherToStandard(stdId, teacherId) {
        return axios.put(`http://localhost:8080/standards/${stdId}/classteacher`, {'id':teacherId})
    }
}

export default new StandardService()