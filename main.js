let cabify = new Brand("Cabify", "9400D3", 0.5, 1);
let uber = new Brand("Uber", " 000000", 3, 0.5);
let lyft = new Brand("Lyft", "FFC0CB", 6, 0.3);
let taxify = new Brand("Taxify", "FFFF00", 12, 0.1);

let brands = [cabify, uber, lyft, taxify];
let comparator = new Comparator(brands);
let mainBoard = new MessageBoard("mainBoard");

setInterval(function () {
    let id = randInt(1,4);
    let mins = randMin();
    let brand = comparator.bestBrand(mins);
    
    let req = new Request(id, mins, brand);
    req.hail(mainBoard);
}, 1500);
