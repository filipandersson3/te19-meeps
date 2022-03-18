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
                items: rows,
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

router.post('/', async (req, res, next) => {
    const body = req.body.body;
    await pool.promise()
    .query('INSERT INTO meeps (body) VALUES (?)', [body])
    .then((response) => {
        console.log(response);
        if (response[0].affectedRows === 1) {
            res.redirect('/meeps');
        } else {
            res.status(400).redirect('/meeps');
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            videos: {
                error: 'Error posting videos'
            }
        })
    });
})

module.exports = router;