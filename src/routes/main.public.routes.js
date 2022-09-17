const controller = require('../public/controllers/main.controller');

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    controller.getAllData()
    .then(data => {
        res.render('landing',{
            message: 'PokePUG',
            list: data.list
        }); 
    }).catch((err) => {
        console.log(err)
    });
});

router.get('/detail', (req, res) => {
    res.render('detail',{
        message: 'OTHER VIEW',
        component:'other'
    }); 
});

module.exports = router;
