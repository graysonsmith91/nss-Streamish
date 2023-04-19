import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import VideoForm from "./VideoForm";
import { VideoContainer } from "./VideoContainer";
import VideoDetails from "./VideoDetails";
import UserVideos from "./UserVideos";
import Login from "./Login";
import Register from "./Register";

const ApplicationViews = ({ isLoggedIn }) => {
    return (
        <Routes>
            <Route path="/" >
                <Route
                    index
                    element={isLoggedIn ? <VideoContainer /> : <Navigate to="/login" />}
                />
                <Route path="videos">
                    <Route index element={<VideoContainer />} />
                    <Route
                        path="add"
                        element={isLoggedIn ? <VideoForm /> : <Navigate to="/login" />}
                    />
                    <Route path=":id" element={<VideoDetails />} />
                </Route>

                <Route path="users">
                    <Route path=":id" element={<UserVideos />} />
                </Route>

                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
            <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Routes>
    );
};

export default ApplicationViews;