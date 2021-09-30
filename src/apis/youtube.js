import axios from "axios";
const KEY = "AIzaSyDHosoNmAjUdxqHoUJy8eHbBh1Uf0EKsk0";

export default axios.create({
  baseUrl: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
