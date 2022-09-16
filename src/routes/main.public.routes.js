const controller = require('../public/controllers/main.controller');

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    controller.getAllData()
    .then(data => {
        res.render('main',{
            message: 'PokePUG',
            list: data.list
        }); 
    }).catch((err) => {
        console.log(err)
    });
});

module.exports = router;
