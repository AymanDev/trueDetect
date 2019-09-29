import axios from 'axios';
import * as qs from 'querystring'

const BASE_URL = "http://ed19c165.ngrok.io";
const TOKEN = "/Token"
const SURVEYS = "/api/Values/GetAllSurveys"

const request = async (endpoint, data) => {
    try {
        const response = await axios.post(BASE_URL + endpoint, qs.stringify(data),
            {
                mode: 'no-cors',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
        return response.data;
    } catch (e) {
        return { error: "Ошибка запроса" };
    }
}

const requestAuth = async (endpoint, data) => {
    const token = localStorage.getItem("token");
    if (!token) {
        return { error: "Токен не найден" }
    }

    try {
        const response = await axios.post(BASE_URL + endpoint, qs.stringify(data),
            {
                mode: 'no-cors',
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
        return response.data;
    } catch (e) {
        return { error: "Ошибка запроса" };
    }
}

export const login = async (email, password) => {
    return await request(TOKEN, { 'username': email, 'password': password, 'grant_type': 'password' })
};

export const getAllSurveys = async () => {
    return await requestAuth(SURVEYS, {})
}
