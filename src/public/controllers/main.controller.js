const mainService = require('../services/main.services.js');

const getAllData = () => {
    return new Promise((resolve, reject) => {
        Promise.all([
            mainService.getList()        
        ])
        .then(([list]) => {
            resolve({
                list:list
            });
        })
        .catch(err => console.log(err))
    });
    }

module.exports = {
    getAllData
}