const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let trex;
  let brachiosaurus;

  beforeEach(function() {
    park = new Park('Jurassic Park', 2000);
    trex = new Dinosaur('t-rex', 'carnivore', 50);
    brachiosaurus = new Dinosaur('brachiosaurus', 'herbivore', 20)
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
    park.addDinosaur(trex)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(trex)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0);
  });


  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(trex)
    park.addDinosaur(brachiosaurus)
    const actual = park.findMostPopularDino()
    assert.strictEqual(actual, 't-rex')
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.findDinosBySpecies('t-rex')
    const actual = park.findDinosBySpecies.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.addDinosaur(trex);
    park.addDinosaur(brachiosaurus);
    park.removeBySpecies('t-rex');
    const actual = park.dinosaurs;
    const expected = [brachiosaurus];
    assert.deepStrictEqual(actual, expected);
  });
});
