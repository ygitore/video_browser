import Axios from "axios";

const KEY = 'AIzaSyA1op2f5wIS27r6rCYRcNMC33-4EUEyvQ0'
export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
})