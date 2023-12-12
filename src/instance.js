import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/",
    headers: {'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo'}
});

export default instance;
