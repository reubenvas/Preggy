import config from '../config';

async function getWeek(num) {
    return fetch(config.backendUrl + `/api/week/${num}`)
    .then(res => res.json())
    .catch(err => console.error(err))
}

async function getBlogpostforWeek(num) {
    console.log(num);
    return fetch(config.backendUrl + `/api/blogposts/${num}`)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export default {getWeek, getBlogpostforWeek};