import axios from "axios";
require("dotenv").config();

const KEY = "AIzaSyDsfYdPR2w-lY9au4gGgc58zOWSu2blHx8";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
