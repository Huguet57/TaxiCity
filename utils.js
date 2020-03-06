function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function randMin() {
    randIndex = randInt(1,timedist.length) - 1;
    return timedist[randIndex];    
}

function randHail() {
    let id = randInt(1,4);
    let mins = randMin();
    let brand = comparator.bestBrand(mins);
    
    let req = new Request(id, mins, brand);
    req.hail(mainBoard);    
}

function switchHidden(tableid) {
    let table = document.getElementById(tableid);
    
    Array.from(table.getElementsByClassName('toHide')).forEach(function(node) {
        if (node.style.display != "table-row-group") {
            node.style.display = "table-row-group";
        } else {
            node.style.display = "none";
        }
    });
}
