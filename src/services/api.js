//npm install axios
import axios from "axios";

const api = axios.create({

    baseURL: 'http://localhost:8080/agendamentus/api/v1'
})

export default api