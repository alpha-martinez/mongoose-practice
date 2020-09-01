// Require needed modules
const express = require('express');
const { db } = require('../models/piece');

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .then(pieceArray => {
    console.log(pieceArray)
    res.send(pieceArray)
  }).catch(err => {
    console.log(err, 'error')
    res.status(503).send({message: 'Database asleep?'})
  })
  // res.render('pieces/index');
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Piece.create(req.body)
  .then(createPiece => {
    console.log(createPiece)
    res.status(201).send(createPiece)
  }).catch(err => {
    console.log('Error while creating new piece')
    if(err.name === 'Validation Error') {
      res.status(406).send({message: 'Validation Error'})
    } else {
      res.status(503).send({message: 'Database asleep'})
    }
  })
  // res.send('STUB - NEW PIECES POST');
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  res.render('pieces/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  res.send('pieces/show');
});

module.exports = router;
