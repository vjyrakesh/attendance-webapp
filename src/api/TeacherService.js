import axios from 'axios';
import { API_SERVER } from './constants';

class TeacherService {
    async getAllTeachers() {
        try {
            const response = await axios.get(`${API_SERVER}/teachers`);
            if(response && response.data) {
                return response.data;
            }
        } catch(error) {
            console.error("Error while fetching Teachers: " + error.message);
        }
    }

    addSubjectToTeacher(teacherId, subName) {
        return axios.put(`${API_SERVER}/teachers/${teacherId}/subjects`, {'name':subName})
    }

    async getOneTeacher(id) {
        try {
            const response = await axios.get(`${API_SERVER}/teachers/${id}`);
            if(response && response.data) {
                return response.data;
            }
        } catch(error) {
            console.error("Error while fetching Teachers: " + error.message);
        }
    }

    async getSubjectsOfTeacher(id) {
        try {
            const response = await axios.get(`${API_SERVER}/teachers/${id}/subjects`);
            if(response && response.data) {
                return response.data;
            }
        } catch(error) {
            console.error("Error while fetching Subjects of Teacher: " + error.message);
        }
    }
}

export default new TeacherService()