import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "38ed52267546fc5c7e89c8e129610f91",
        language: "ko-KR",
    },
});

export default instance;