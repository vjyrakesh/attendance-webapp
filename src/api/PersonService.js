import axios from 'axios';
import { API_SERVER } from './constants';

class PersonService {
    registerPerson(values) {
        return axios.post(`${API_SERVER}/register`,values)
    }
}

export default new PersonService()