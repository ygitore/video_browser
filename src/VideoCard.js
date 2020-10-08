import React from 'react'

const VideoCard = ({video, onVideoSelect}) => {    
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <img className="ui image" key={video.id.videoId} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                {
                    video.snippet.description
                }
            </div>
        </div>
    )
}

export default VideoCard
