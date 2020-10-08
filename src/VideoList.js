import React from 'react'
import VideoCard from './VideoCard'

const VideoList = (props) => {
    const renderedList = props.videos.map(video=><VideoCard key={video.id.videoId} video = {video} />)
    return (
        <div>
            {renderedList}
        </div>
    )
}

export default VideoList
