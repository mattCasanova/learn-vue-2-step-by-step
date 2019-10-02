
class Status {
    static all(then) {
        return axios.get('/statuses').then(response => then(response.data));
            //.then( ({data}) => then(data));
    }
}

export default Status;