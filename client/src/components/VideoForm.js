import { useState } from "react";
import { addVideo } from "../modules/videoManager";
import { useNavigate } from "react-router-dom";

const VideoForm = () => {
    const navigate = useNavigate();
    const [newVideo, setNewVideo] = useState({
        title: "",
        description: "",
        url: ""
    })

    const handleSubmitButtonClick = (event) => {
        event.preventDefault();

        const videoToSendToAPI = {
            Title: newVideo.title,
            Description: newVideo.description,
            Url: newVideo.url
        }

        if (!videoToSendToAPI.Title || !videoToSendToAPI.Url) {
            window.alert("Please complete add video form")
        }
        else {
            addVideo(videoToSendToAPI).then((p) => {
                // Navigate the user back to the home route
                navigate("/");
            });
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <form>
                    <div className="form-group">
                        <label htmlFor="videoTitle">Video Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="videoTitle"
                            placeholder="Enter video title"
                            value={newVideo.title}
                            onChange={(event) => {
                                const copy = { ...newVideo }
                                copy.title = event.target.value
                                setNewVideo(copy)
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="videoDescription">Video Description:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="videoDescription"
                            placeholder="Enter video description"
                            value={newVideo.description}
                            onChange={(event) => {
                                const copy = { ...newVideo }
                                copy.description = event.target.value
                                setNewVideo(copy)
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="videoUrl">Video URL:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="videoUrl"
                            placeholder="Enter video URL"
                            value={newVideo.url}
                            onChange={(event) => {
                                const copy = { ...newVideo }
                                copy.url = event.target.value
                                setNewVideo(copy)
                            }}
                        />
                    </div>
                    <button type="submit" onClick={handleSubmitButtonClick}>
                        Add Video
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VideoForm;