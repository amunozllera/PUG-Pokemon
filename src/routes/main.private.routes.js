const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
        const list = [
            {id:1, type:'patata'},
            {id:2, type:'patata1'},
            {id:3, type:'patata2'},
            {id:4, type:'patata3'},
            {id:5, type:'patata4'}
        ];
        res.status(200).json(list)
});

module.exports = router;
