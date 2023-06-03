const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

const pool = require('../modules/pool');


// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    console.log(req.params.id)
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
// router.get('/', (req, res) => {
//     console.log('gallery items are:', galleryItems)
//     res.send(galleryItems);

router.get('/', (req, res)=>{
        let queryText = 'SELECT * FROM gallery';
        pool.query(queryText)
            .then(result => {
                res.send(result.rows);
            })
            .catch(error =>{
                console.log('PROBLEMS IN THE GET=>', error);
                res.sendStatus(500);
            })
    })
// }); // END GET Route

module.exports = router;