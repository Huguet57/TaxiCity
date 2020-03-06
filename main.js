let cabify = new Brand("Cabify", "9400D3", 0.5, 1);
let uber = new Brand("Uber", " 000000", 3, 0.5);
let lyft = new Brand("Lyft", "FFC0CB", 6, 0.3);
let taxify = new Brand("Taxify", "FFFF00", 12, 0.1);

let brands = [cabify, uber, lyft, taxify];
let comparator = new Comparator(brands);
let mainBoard = new MessageBoard("mainBoard", brands);

/*
setTimeout(randHail, 500);
let interv = setInterval(randHail, 5000);
setTimeout(function () { clearInterval(interv) }, 15000);
*/

let hailerButton = document.getElementById("hailer");
hailerButton.addEventListener('click', randHail, false);

