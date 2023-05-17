import axios from "axios";
const journalApi = axios.create({
  baseURL:
    "https://vue-demos-eb3e0-default-rtdb.europe-west1.firebasedatabase.app",
});
export default journalApi;
