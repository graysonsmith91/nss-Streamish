import React from "react";
import { Routes, Route } from "react-router-dom";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import { VideoContainer } from "./VideoContainer";

const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route index element={<VideoContainer />} />
                <Route path="videos">
                    <Route index element={<VideoContainer />} />
                    <Route path="add" element={<VideoForm />} />
                    <Route path=":id" element={<p>TODO: Make Video Details component</p>} />
                </Route>
            </Route>
            <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Routes>
    );
};

export default ApplicationViews;