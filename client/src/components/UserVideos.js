import { Link, useParams } from "react-router-dom";
import { getVideosByUser } from "../modules/videoManager";
import { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";

const UserVideos = () => {
    const [userVideos, setUserVideos] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getVideosByUser(id).then(videos => setUserVideos(videos));
    }, []);

    if (!userVideos) {
        return null;
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <p className="text-left px-2">All videos by: {userVideos.name}</p>
                {userVideos?.videos?.map((video) => (
                    <Card >
                        <CardBody>
                            <iframe className="video"
                                src={video.url}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />
                            <p>
                                <Link to={`/videos/${video.id}`}>
                                    <strong>{video.title}</strong>
                                </Link>
                            </p>
                            <p>{video.description}</p>
                            {/* <p>{video.comments.map(comment => <li>{comment.message}</li>)}</p> */}
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default UserVideos;