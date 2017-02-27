const express = require('express')
const router = express.Router()
const low = require('lowdb')
const fileAsync = require('lowdb/lib/storages/file-async')
const db = low('db/db.json', {
  storage: fileAsync
})

//CRUD Read
router.get('/movies', (req, res) => {
  const movies = db.get('movies')
  res.send(movies)
})

//CRUD Read by id
router.get('/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id)
  const singleMovie = db.get('movies').find({id: movieId})
  res.send(singleMovie)
})

//CRUD Create
router.post('/movies', (req, res) => {
  req.body.id = parseInt(req.body.id)
  db.get('movies')
    .push(req.body)
    .write()
    .then(newMovie => {
      res.status(201).send(newMovie)
    })
    .catch(err => {
      console.log(err);
    })
})

//CRUD Update
router.put('/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id)
  req.body.id = parseInt(req.body.id)
  db.get('movies')
    .find({id: movieId})
    .assign(req.body)
    .write()
    .then(updatedMovie => {
      res.send(updatedMovie)
    })
    .catch(err => {
      console.log(err);
    })
})

//CRUD delete
router.delete('/movies/:id', (req, res) => {

  const movieId = parseInt(req.params.id)
  db.get('movies')
    .remove({id: movieId})
    .write()
    .then(deletedMovie => {
      res.status(204).send()
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router
