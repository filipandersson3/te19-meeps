const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', async function(req, res, next) {
    await pool.promise()
        .query('SELECT * FROM meeps')
        .then(([rows, fields]) => {
            console.log(rows);
            let data = {
                message: "He llo",
                layout: 'layout.njk',
                title: 'Nunjucks example',
                items: rows
              };
              res.render('meeps.njk', data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                videos: {
                    error: 'Error getting meeps'
                }
            })
        });
});

module.exports = router;