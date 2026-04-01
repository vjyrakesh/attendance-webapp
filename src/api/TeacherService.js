import axios from 'axios';
import { API_SERVER } from './constants';

class TeacherService {
    getAllTeachers() {
        return axios.get(`${API_SERVER}/teachers`)
    }

    addSubjectToTeacher(teacherId, subName) {
        return axios.put(`${API_SERVER}/teachers/${teacherId}/subjects`, {'name':subName})
    }

    getOneTeacher(id) {
        return axios.get(`${API_SERVER}/teachers/${id}`)
    }

    getSubjectsOfTeacher(id) {
        return axios.get(`${API_SERVER}/teachers/${id}/subjects`)
    }
}

export default new TeacherService()