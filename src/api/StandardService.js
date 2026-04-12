import axios from 'axios';
import { API_SERVER } from './constants';

class StandardService {
    async getAllStandards() {
        try {
            const response = await axios.get(`${API_SERVER}/standards`);
            if(response && response.data) {
                return response.data;
            }
        } catch(error) {
            console.error("Error while fetching Standards: " + error.message);
        }
    }

    addStandard(name) {
        return axios.post(`${API_SERVER}/standards`, {'name':name});
    }

    addClassTeacherToStandard(stdId, teacherId) {
        return axios.put(`${API_SERVER}/standards/${stdId}/classteacher`, {'id':teacherId});
    }

    async getOneStandard(id) {
        try {
            const response = await axios.get(`${API_SERVER}/standards/${id}`);
            if(response && response.data) {
                return response.data;
            }
        } catch(error) {
            console.error("Error while fetching Standard: " + error.message);
        }
    }

    async getStudentsOfStandard(id) {
        try {
            const response = await axios.get(`${API_SERVER}/standards/${id}/students`);
            if(response && response.data) {
                return response.data;
            }
        } catch(error) {
            console.error("Error while fetching Students: " + error.message);
        }
    }
}

export default new StandardService()