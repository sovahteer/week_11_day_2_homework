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
        if(bestDino.guestsAttractedPerDay < dinosaur.guestsAttractedPerDay)
        bestDino = dino;
    }
    return dino.name;
}

module.exports = Park;