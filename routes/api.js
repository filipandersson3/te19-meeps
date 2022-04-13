const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', async function(req, res, next) {
    await pool.promise()
        .query('SELECT * FROM fipann_meeps ORDER BY updated_at DESC')
        .then(([rows, fields]) => {
            res.json({
                meeps: {
                    data: rows
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                meeps: {
                    error: 'Error getting meeps'
                }
            })
        });
});

module.exports = router;