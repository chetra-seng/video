import axios from '../api/axios';
import { useState } from 'react';

const useVideos = term => {
    const [videos, setVideos] = useState([]);

    const search = async term => {
        const response = await axios.get("/search", {
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
    }

    return [videos, search];
};

export default useVideos;