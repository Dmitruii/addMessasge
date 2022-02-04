import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001',
});

export const messageApi = {
    send(name, email, message) {
        return instance.post(`/`, {name: name,email: email,message: message})
            .then(res => res);
    },
    take() {
        return instance.get(`/`)
            .then(res => res);
    }
}