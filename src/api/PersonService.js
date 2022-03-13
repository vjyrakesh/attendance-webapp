import axios from 'axios'

class PersonService {
    registerPerson(values) {
        return axios.post("http://localhost:8080/register",values)
    }
}

export default new PersonService()