import { render } from '@testing-library/react'
import React from 'react'

const VideoDetail = ({video}) => {
    const renderedList = () => {
        if(!video){
            return <div>Loading...</div>
        }
        return <div>{video.snippet.title}</div>        
    }
    return (
        <div>
            {renderedList()}
        </div>
    )
}

export default VideoDetail
