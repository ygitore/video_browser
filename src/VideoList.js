import React from 'react'
import VideoCard from './VideoCard'

const VideoList = (props) => {
    const renderedList = props.videos.map(video=><VideoCard key={video.id.videoId} onVideoSelect={props.onVideoSelect} video = {video} />)
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList
