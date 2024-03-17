import axios from "axios";
// Base da URL: https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/movie/now_playing?api_key=52b56f08b71aa6b88d4cb893597fd4d1&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;