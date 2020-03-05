function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function randMin() {
    randIndex = randInt(1,timedist.length) - 1;
    return timedist[randIndex];    
}
