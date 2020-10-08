import React from 'react'

const VideoCard = (props) => {
    
    return (
        <div>
            {<img key={props.video.id.videoId} title = "kk" src={props.video.snippet.thumbnails.medium.url} />}
        </div>
    )
}

export default VideoCard
