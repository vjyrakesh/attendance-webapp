import axios from 'axios';
import { API_SERVER } from './constants';

class SubjectService {
    async getAllSubjects() {
        try {
            const response = await axios.get(`${API_SERVER}/subjects`);
            if(response && response.data) {
                return response.data;
            }
        } catch(error) {
            console.error("Error while fetching Subjects: " + error.message);
        }
    }

    addNewSubject(name) {
        return axios.post(`${API_SERVER}/subjects`, {'name':name})
    }

    addSubjectToStandard(subId, stdId) {
        return axios.put(`${API_SERVER}/subjects/${subId}/standard`, {'id':stdId})
    }

    async getOneSubject(id) {
        try {
            const response = await axios.get(`${API_SERVER}/subjects/${id}`);
            if(response && response.data) {
                return response.data;
            }
        } catch(error) {
            console.error("Error while fetching Subject: " + error.message);
        }
        
    }
}

export default new SubjectService()