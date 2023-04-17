const baseUrl = '/api/video';
const userBaseUrl = '/api/userprofile';

export const getAllVideos = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
};

export const getAllVideosWithComments = () => {
    return fetch(`${baseUrl}/GetWithComments`)
        .then((res) => res.json())
};

export const getVideo = (id) => {
    return fetch(`${baseUrl}/Comments/${id}`).then((res) => res.json());
};

//https://localhost:5001/api/video/Search?q=NET&sortDesc=False
export const searchVideos = (searchTerm, sortDesc) => {
    return fetch(`${baseUrl}/Search?q=${searchTerm}&sortDesc=${sortDesc}`)
        .then((res) => res.json())
};

export const addVideo = (video) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    });
};

export const getVideosByUser = (id) => {
    return fetch(`${userBaseUrl}/videos/${id}`)
        .then((res) => res.json())
};