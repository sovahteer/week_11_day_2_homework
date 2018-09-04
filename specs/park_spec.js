const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2

  beforeEach(function() {
    park = new Park('Jurassic Park', 2000);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('brachiosaurus', 'herbivore', 20)
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 2000);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur1)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0);
  });


  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.findMostPopularDino()
    assert.strictEqual(actual, 't-rex')
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.findDinosBySpecies('t-rex')
    const actual = park.findDinosBySpecies.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.removeDinosBySpecies('t-rex');
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });
});
