const express = require('express');
const router = express.Router();
//item model
const Item = require('../../model/Items');

// @route GET api/items
// @desc Get all items
// @access public

router.get('/', (req, res)=> {
    Item.find()
        .sort({date: -1}) //sort by date desc
        .then(items => res.json(items));
});

// @route POST api/items
// @desc create a item
// @access public

router.post('/', (req, res)=> {
    const newItem = new Item({
        name: req.body.name,
        quantity: req.body.quantity
    });

    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items
// @desc delete a item
// @access public

router.delete('/:id', (req, res)=> {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.status(200).json({success: true})))
        .catch(err=> res.status(404).json({success: false}));
});

module.exports = router;