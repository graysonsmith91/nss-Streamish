import React from "react";
import "./App.css";
import VideoList from "./components/VideoList";
import SearchVideos from "./components/SearchVideos";
import { VideoContainer } from "./components/VideoContainer";

function App() {
  return (
    <div className="App">
      <VideoContainer />
    </div>
  );
}

export default App;