import axios from 'axios'

class StandardService {
    getAllStandards() {
        return axios.get("http://localhost:8080/standards")
    }
}

export default new StandardService()