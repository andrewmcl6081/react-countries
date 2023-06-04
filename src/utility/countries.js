import axios from "axios";

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries';

const getAll = () => {
    const promise = axios.get(`${baseUrl}/api/all`);
    return promise.then(response => response.data);
}

const countries = {getAll};
export default countries;