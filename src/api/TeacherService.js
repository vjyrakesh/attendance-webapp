import axios from 'axios'

class TeacherService {
    getAllTeachers() {
        return axios.get("http://localhost:8080/teachers")
    }

    addSubjectToTeacher(teacherId, subName) {
        return axios.put(`http://localhost:8080/teachers/${teacherId}/subjects`, {'name':subName})
    }
}

export default new TeacherService()