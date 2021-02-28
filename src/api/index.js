import axios from "axios";

const API_URL = 'http://localhost:8000';

const headers = {
    'Content-Type': 'application/json',
}

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {username, password}, {headers});
        return response.data;
    } catch (error) {
        console.error('Login Error', error);
    }
}

export const registration = async (firstName, lastName, username, password) => {
    try {
        const response = await axios.post(`${API_URL}/registration`, {
            firstName,
            lastName,
            username,
            password
        }, {headers})
        return response.data;
    } catch (error) {
        console.error('Registration Error', error);
    }
}

export const logout = async () => {
    try {
        const newHeader = {...headers, Authorization: localStorage.getItem('token')}
        await axios.post(`${API_URL}/logout`, null, {headers: newHeader});
    } catch (error) {
        console.error('Logout error', error)
    }
}
