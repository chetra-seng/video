import axios from "axios";

const KEY = 'your_api_key'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY,
        part: 'snippet',
        maxResults: 5
    }
});