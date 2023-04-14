import { useEffect, useState } from "react";
import SearchVideos from "./SearchVideos";
import VideoList from "./VideoList";
import { getAllVideosWithComments } from "../modules/videoManager";


export const VideoContainer = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortDesc, setSortDesc] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getAllVideosWithComments().then(videos => setVideos(videos));
    }, []);

    return (
        <>
            <SearchVideos
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                sortDesc={sortDesc}
                setSortDesc={setSortDesc}
                setVideos={setVideos} />
            <VideoList videos={videos} />
        </>
    );
}