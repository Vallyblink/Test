import axios from "axios";


const instance = axios.create({
    baseURL:`http://localhost:3000`
})

export const data = async () => {
    try {
        const response = await instance.get(`/data`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Помилка при завантаженні даних:', error);
        throw error; 
    }
}