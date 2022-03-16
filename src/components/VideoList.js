import React from "react";
import { List } from "semantic-ui-react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, setSelectedVideo }) => {
    const renderedVideos = videos.map(video => {
        return (
            <VideoItem video={video} key={video.id.videoId} setSeletedVideo={setSelectedVideo} />
        );
    });

    return (
        <List divided relaxed>
            {renderedVideos}
        </List>
    );
};

export default VideoList;