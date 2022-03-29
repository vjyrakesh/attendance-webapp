import axios from 'axios'

class TeacherService {
    getAllTeachers() {
        return axios.get("http://localhost:8080/teachers")
    }

    addSubjectToTeacher(teacherId, subName) {
        return axios.put(`http://localhost:8080/teachers/${teacherId}/subjects`, {'name':subName})
    }

    getOneTeacher(id) {
        return axios.get(`http://localhost:8080/teachers/${id}`)
    }

    getSubjectsOfTeacher(id) {
        return axios.get(`http://localhost:8080/teachers/${id}/subjects`)
    }
}

export default new TeacherService()