const fetch = require('../../common/helpers/fetch.helper');
const getList = () => {
    return new Promise((resolve, reject) => {
        fetch(
            'http://localhost:3000/api/',
            {
                method:'GET',
            })
            .then(res => {
                resolve(res)
            })
            .catch(err => console.log(err))
    });
}


module.exports = {
    getList
}