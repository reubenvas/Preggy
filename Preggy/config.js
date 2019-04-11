const configObj = {
    dev: {
        backendUrl: 'http://localhost:5000',
    },
    prod: {
        backendUrl: 'https://preggy-server.herokuapp.com',
    },
};

export default configObj.prod;