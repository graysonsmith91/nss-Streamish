import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideosWithComments } from "../modules/videoManager";

const VideoList = ({ videos }) => {
    //const [videos, setVideos] = useState([]);

    // const getVideos = () => {
    //     getAllVideosWithComments().then(videos => setVideos(videos));
    // };

    // useEffect(() => {
    //     getAllVideosWithComments().then(videos => setVideos(videos));
    // }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                {videos.map((video) => (
                    <Video video={video} key={video.id} />
                ))}
            </div>
        </div>
    );
};

export default VideoList;