const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');

const pool = require('../modules/pool');


// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    console.log(req.params.id)
    const galleryId = req.params.id;
    let queryText = `UPDATE gallery SET "likes" = "likes" +1 WHERE "id" = $1`;

    pool.query(queryText, [galleryId])
        .then(result => {
            console.log('Likes updated at id:', galleryId)
            res.sendStatus(200);
        }).catch(error => {
            res.sendStatus(500)
            alert('Error with PUT request:', error)
        })
}); // END PUT Route

// GET Route
// router.get('/', (req, res) => {
//     console.log('gallery items are:', galleryItems)
//     res.send(galleryItems);

router.get('/', (req, res)=>{
        console.log( req.body )
        let queryText = 'SELECT * FROM gallery ORDER BY "id" ASC';
        pool.query(queryText)
            .then(result => {
                console.log(result.rows)
                res.send(result.rows);
            })
            .catch(error =>{
                console.log('PROBLEMS IN THE GET=>', error);
                res.sendStatus(500);
            })
    })
// }); // END GET Route

module.exports = router;