const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', async function(req, res, next) {
    const flash = req.session.flash;
    const flashColor = req.session.flashColor;
    req.session.flash = "";
    req.session.flashColor = "";
    console.log(flash);
    await pool.promise()
        .query('SELECT * FROM fipann_meeps ORDER BY updated_at DESC')
        .then(([rows, fields]) => {
            console.log(rows);
            let data = {
                flash: flash,
                flashColor: flashColor,
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
    .query('INSERT INTO fipann_meeps (body) VALUES (?)', [body])
    .then((response) => {
        console.log(response);
        if (response[0].affectedRows === 1) {
            req.session.flash = "Meep posted.";
            req.session.flashColor = "primary";
            res.redirect('/meeps');
        } else {
            res.status(400).redirect('/meeps');
        }
    })
    .catch(err => {
        console.log(err);
        req.session.flash = "Error posting meep.";
        req.session.flashColor = "danger";
        res.redirect('/meeps');
    });
});

/* DELETE /:id - delete a task by id */
router.get('/:id/delete/', async (req, res, next) => {
    const id = req.params.id;
    if (isNaN(req.params.id)) {
        req.session.flash = "Bad request.";
        req.session.flashColor = "danger";
        res.redirect('/meeps/');
    } else {
        await pool.promise()
            .query('DELETE FROM fipann_meeps WHERE id = ?', [id])
            .then((response) => {
                console.log(response);
                if (response[0].affectedRows === 1) {
                    req.session.flash = "Meep deleted.";
                    req.session.flashColor = "primary";
                    res.redirect('/meeps');
                } else {
                    req.session.flash = "Error deleting meep.";
                    req.session.flashColor = "danger";
                    res.redirect('/meeps/' + id);
                }
            })
            .catch(err => {
                console.log(err);
                req.session.flash = "Error deleting meep.";
                req.session.flashColor = "danger";
                res.redirect('/meeps/' + id);
            });
    }
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    if (isNaN(id)) {
        req.session.flash = "Bad request.";
        req.session.flashColor = "danger";
        res.redirect('/meeps/');
    } else {
        await pool.promise()
            .query('SELECT * FROM fipann_meeps WHERE id = ?', [id])
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
        .query('UPDATE fipann_meeps SET body = ? WHERE id = ?', [body,id])
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