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
};

class Comparator {
    constructor(brands) {
        this.brands = brands;
    }
    
    bestCost(mins) {
        let minCost = 1e9;
        let minBrand = "None";
        
        this.brands.forEach(function(el) {
            let cost = el.cost(mins);
            
            if (minCost > cost) {
                minCost = cost;
                minBrand = el.getname();
            }
        });
        
        console.log("Min cost: " + minCost)
        console.log("Min brand: " + minBrand)
        
        return minCost;
    }
};

class Person extends Comparator{
    constructor(id, name, brands) {
        this.id = id;
        this.name = name;
        super(brands);
    }
    
    request() {
        this.mins = randMin();
        return this.mins;
    }
};
