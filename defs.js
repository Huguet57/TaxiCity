class Brand {
    constructor(name, color, fix, moving) {
        this.name = name;
        this.color = color;
        
        this.fix = fix;
        this.moving = moving;
    }
    
    cost(mins) {
        return this.fix + mins*this.moving;
    }
    
    getname() {
        return this.name;
    }
    
    getcolor() {
        return this.color;
    }
};

class Comparator {
    constructor(brands) {
        this.brands = brands;
        this.minCost = 1e9;
        this.minBrand = null;
    }
    
    calcBest(mins) {
        let minCost = 1e9;
        let minBrand = null;
        
        this.brands.forEach(function(el) {
            let cost = el.cost(mins);
            
            if (minCost > cost) {
                minCost = cost;
                minBrand = el;
            }
        });
        
        this.minCost = minCost;
        this.minBrand = minBrand;
    }
    
    bestCost(mins) {
        this.calcBest(mins);       
        return this.minCost;
    }
    
    bestBrand(mins) {
        this.calcBest(mins);       
        return this.minBrand;
    }
};

class Request {
    constructor(personid, mins, brand) {
        this.personid = personid;
        this.mins = mins;
        this.cost = brand.cost(mins);
        this.brand = brand;
    }
    
    hail(msgboard) {
        msgboard.add({
            id: randInt(0,1e8),
            mins: this.mins,
            brand: this.brand
        });
        
        msgboard.update();
    }
};
