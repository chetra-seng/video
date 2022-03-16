import React, { useEffect, useState } from "react";
import { Container, Grid } from "semantic-ui-react";

import useVideos from "../hooks/useVideos";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const App = () => {
    const [videos, setVideos] = useVideos('');
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <Container>
            <SearchBar onSearchTerm={setVideos} />
            <div>
                <Grid>
                    <Grid.Column width={10}>
                        <VideoDetail selectedVideo={selectedVideo} />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
                    </Grid.Column>
                </Grid>
            </div>
        </Container>
    );
}

export default App;