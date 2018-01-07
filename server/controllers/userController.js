const bcrypt = require('bycryptjs')
const jwt = require('json webtoken')
const fb = require('fb')
const Model = require('../models')
const User = Model.User


module.exports = {
  signin(req, res){
    User.findOne({where : {'email' : req.body.email}})
    .then(result => {

    })
    .catch(err => res.status(500).json({ message : err}))
  },
  signUp(req, res){
    let data  = {
      email : req.body.email,
      password : req.body.password
    }
    User.create(data)
    .then(result => {
      res.status(200).json({
        message : 'Succes to create User'
      })   
    })
    .catch(err => res.status(500).json({ message : err}))
  },
  loginFb(req, res){
    //buat login fb jadi buat route khusus klo mao login pake fb
  }
}