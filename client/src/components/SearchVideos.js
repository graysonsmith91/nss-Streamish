import React, { useEffect, useState } from "react";
import { searchVideos } from "../modules/videoManager";


const SearchVideos = ({ searchTerm, setSearchTerm, sortDesc, setSortDesc, setVideos }) => {
    // const [searchTerm, setSearchTerm] = useState("");
    // const [sortDesc, setSortDesc] = useState(false);

    // useEffect(() => {
    //     searchVideos(searchTerm, sortDesc).then(searchedVideos => setVideos(searchedVideos));
    // }, [searchTerm, sortDesc]);

    const handleSearch = () => {
        const searchedVideos = searchVideos(searchTerm, sortDesc);
        setVideos(searchedVideos);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="form-group">
                    <label htmlFor="searchTerm">Search Videos:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="searchTerm"
                        placeholder="Enter search term"
                        value={searchTerm}
                        onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="sortDesc"
                        checked={sortDesc}
                        onChange={(event) => {
                            setSortDesc(event.target.checked)
                        }}
                    />
                    <label className="form-check-label" htmlFor="sortDesc">
                        Sort Descending
                    </label>
                </div>
            </div>
            <button type="submit" onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchVideos;