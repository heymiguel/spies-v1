var Character = require('./model.js');

exports.index = function(req, res, next) {
  Character.find()
  .then((character) => res.send(character))
  .catch(next)
}

exports.show = function(req, res) {
  Character.findById(req.params.id)
  .then((character) => res.send(character))
  .catch((err) => res.send(404))
}

// Before you implement these methods, make sure you're including the body-parser
// middleware in index.js

exports.update = function(req, res) {
  // Implement your update logic here
  Character.findById(req.params.id)
  .then((character)=>{
    // required fields?

  // required stuff
    character.user = req.body.user;
    character.name = req.body.name;
    character.callsign = req.body.callsign;
    // end required stuff

    // various character items go here
    character.age = req.body.age;
    character.height = req.body.height;
    character.weight = req.body.weight;
    character.ethnicity = req.body.ethnicity;
    character.class = req.body.class;
    character.rank = req.body.rank;
    character.faction = req.body.faction;

    character.save()
    .then((character)=>{
      res.send(character);
    })
    .catch((err)=>{
      res.send (err);
    });
  })
  // Remember that this returns a promise, so you'll need to work with the
  // returned post in a .then() call. Also, remember to save()!
  // If you can't find the post, return a 404.
  .catch(()=> res.send(404))
}

exports.create = function(req, res) {
  var character = new Character();
  // Implement your create logic here. Create a new post with var post = new Post()
  // Remember to save!

  // required stuff
  character.user = req.body.user;
  character.name = req.body.name;
  character.callsign = req.body.callsign;
  // end required stuff

  // callsign is required!! <-- add this field maybe?

  character.description.age = req.body.age;
  character.height = req.body.height;
  character.weight = req.body.weight;
  character.ethnicity = req.body.ethnicity;
  character.class = req.body.class;
  character.rank = req.body.rank;
  character.faction = req.body.faction;


  console.log(character + "!!");

  character.save()
  .then(function(character) {
    res.send(character);
  }).catch(function(err) {
    res.status(422);
    res.send(err);
  });
}

exports.delete = function(req, res, next) {
  character.remove({_id: req.params.id})
  .then(() => res.send(200))
  .catch(next)
}
