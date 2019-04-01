import config from '../config';

async function getWeek() {
    return fetch(config.backendUrl + '/api/week')
    .then(res => res.json())
    .catch(err => console.log(err))
}

export default {getWeek};