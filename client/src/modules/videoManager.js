import { getToken } from "./authManager";

const baseUrl = '/api/video';
const userBaseUrl = '/api/userprofile';

export const getAllVideos = () => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error(
                    "An unknown error occurred while trying to get videos.",
                );
            }
        });
    });
};

export const getAllVideosWithComments = () => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/GetWithComments`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error(
                    "An unknown error occurred while trying to get videos.",
                );
            }
        });
    });
};

export const getVideo = (id) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/Comments/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(
                    "An unknown error occurred while trying to get video details."
                );
            }
        });
    });
};

export const searchVideos = (searchTerms, sortDesc) => {
    return getToken().then((token) => {
        return fetch(
            `${baseUrl}/search?q=${searchTerms}&sortDesc=${sortDesc}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(
                    "An unknown error occurred while trying to get videos."
                );
            }
        });
    });
};

export const addVideo = (video) => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(video),
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else if (resp.status === 401) {
                throw new Error("Unauthorized");
            } else {
                throw new Error(
                    "An unknown error occurred while trying to save a new video.",
                );
            }
        });
    });
};

export const getVideosByUser = (id) => {
    return getToken().then((token) => {
        return fetch(`${userBaseUrl}/videos/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error(
                    "An unknown error occurred while trying to get videos.",
                );
            }
        });
    });
};