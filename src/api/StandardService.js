import axios from 'axios';
import { API_SERVER } from './constants';

class StandardService {
    getAllStandards() {
        return axios.get(`${API_SERVER}/standards`);
        
    }

    addStandard(name) {
        return axios.post(`${API_SERVER}/standards`, {'name':name});
    }

    addClassTeacherToStandard(stdId, teacherId) {
        return axios.put(`${API_SERVER}/standards/${stdId}/classteacher`, {'id':teacherId});
    }

    getOneStandard(id) {
        return axios.get(`${API_SERVER}/standards/${id}`);
    }

    getStudentsOfStandard(id) {
        return axios.get(`${API_SERVER}/standards/${id}/students`);
    }
}

export default new StandardService()