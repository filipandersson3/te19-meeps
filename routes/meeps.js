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
                error: 'Error posting meeps'
            }
        })
    });
});

/* DELETE /:id - delete a task by id */
router.get('/:id/delete/', async (req, res, next) => {
    const id = req.params.id;
    if (isNaN(req.params.id)) {
        res.status(400).json({
            videos: {
                error: 'Bad request'
            }
        })
    } else {
        await pool.promise()
            .query('DELETE FROM meeps WHERE id = ?', [id])
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
                        error: 'Error getting meeps'
                    }
                })
            });
    }
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.status(400).json({
            videos: {
                error: 'Bad request'
            }
        })
    } else {
        await pool.promise()
            .query('SELECT * FROM meeps WHERE id = ?', [id])
            .then(([rows, fields]) => {
                console.log(rows);
                let data = {
                    message: "He llo",
                    layout: 'layout.njk',
                    title: 'Nunjucks example',
                    items: rows,
                  };
                  res.render('meepedit.njk', data);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    videos: {
                        error: 'Error getting meeps'
                    }
                })
            });
    }
});

router.post('/:id', async (req, res, next) => {
    const id = req.params.id;
    const body = req.body.body;
    if (isNaN(id)) {
        res.status(400).json({
            videos: {
                error: 'Bad request'
            }
        })
    } else {
        await pool.promise()
        .query('UPDATE meeps SET body = ? WHERE id = ?', [body,id])
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
                    error: 'Error posting meeps'
                }
            })
        });
    }
});

module.exports = router;