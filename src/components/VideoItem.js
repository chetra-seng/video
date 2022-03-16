import React from "react";
import { Image, List } from "semantic-ui-react";

import './VideoList.css';

const VideoItem = ({ video, setSeletedVideo }) => {
    return (
        <List.Item className='video-item' onClick={()=>{
            setSeletedVideo(video);
        }}>
            <Image src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
            <List.Content>
                <List.Header>{video.snippet.title}</List.Header>
            </List.Content>
        </List.Item>
        
    );
}

export default VideoItem;