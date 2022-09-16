const fetch = require('cross-fetch');
ffetch = (url, params) => {
    return new Promise((resolve, reject) => {
        fetch(url, params)
        .then(res => {
            if (res.status >= 400)
                throw new Error("Bad response from server");
            return res.json();
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
}
module.exports = ffetch