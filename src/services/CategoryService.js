import axios from 'axios';
const APP_URL = "http://172.16.8.223:5500/api/marhaba/";

export function AllCategory() {
    return axios.get(APP_URL + "category");
}
