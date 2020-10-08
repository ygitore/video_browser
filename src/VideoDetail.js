import React from 'react'

const VideoDetail = ({video}) => {
    const renderedList = () => {
        if(!video){
            return <div>Loading...</div>
        }
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
        return <div>
            <iframe src={videoSrc} ></iframe>
            {
                video.snippet.title
            }
            </div>        
    }
    return (
        <div>
            {renderedList()}
        </div>
    )
}

export default VideoDetail
