import React from "react";
import { Embed, Header, Segment } from "semantic-ui-react";

import './VideoDetail.css';

const VideoDetail = ({ selectedVideo }) => {
    if(!selectedVideo) return null;
    return ( 
        <div className="video-detail">
            <Embed 
                source="youtube" 
                id={selectedVideo.id.videoId} 
                placeholder={selectedVideo.snippet.thumbnails.medium.url}
            />
            <Segment>
                <Header>{selectedVideo.snippet.title}</Header>
                {selectedVideo.snippet.description}
            </Segment>
        </div>
    );
};

export default VideoDetail;