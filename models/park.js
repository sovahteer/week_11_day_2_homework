const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = []
}

Park.prototype.addDinosaur= function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    this.dinosaurs.pop(dinosaur);
}

Park.prototype.findMostPopularDino = function(){
    let bestDino;
    for(let dino of this.dinosaurs){
        if (!bestDino || bestDino.guestsAttractedPerDay < dino.guestsAttractedPerDay)
            bestDino = dino;
    }
    return bestDino.species;
}

Park.prototype.findDinosBySpecies = function(species){
    let result = [];
    for(let dino of this.dinosaurs){
        if (species === dino.species)
            result.push(dino);
    }
    return result;

}

Park.prototype.removeBySpecies = function (species) {
  const newDinosaurs = [];

  for (const dinosaur of this.dinosaurs) {
    if (dinosaur.species !== species) {
      newDinosaurs.push(dinosaur);
    }
  }

  this.dinosaurs = newDinosaurs;
}
module.exports = Park;
