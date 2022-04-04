import axios from "axios";

export default axios.create({
    baseURL: "localhost:8000/api",
    headers: {
        'Accept': "application/json",
        "Content-Type": "utf-8"
    }
})