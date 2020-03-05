let cabify = new Brand("Cabify", "9400D3", 0.5, 1);
let uber = new Brand("Uber", " 000000", 3, 0.5);
let lyft = new Brand("Lyft", "FFC0CB", 6, 0.3);
let taxify = new Brand("Taxify", "FFFF00", 12, 0.1);

let brands = [cabify, uber, lyft, taxify];
let person = new Comparator(brands);

console.log(uber);
console.log(lyft.cost(20));
console.log(person.bestCost(89));
