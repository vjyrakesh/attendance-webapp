import axios from 'axios';
import { API_SERVER } from './constants';

class SubjectService {
    getAllSubjects() {
        return axios.get(`${API_SERVER}/subjects`)
    }

    addNewSubject(name) {
        return axios.post(`${API_SERVER}/subjects`, {'name':name})
    }

    addSubjectToStandard(subId, stdId) {
        return axios.put(`${API_SERVER}/subjects/${subId}/standard`, {'id':stdId})
    }

    getOneSubject(id) {
        return axios.get(`${API_SERVER}/subjects/${id}`)
    }
}

export default new SubjectService()