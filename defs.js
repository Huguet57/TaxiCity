class Brand {
    constructor(name, color, fix, moving) {
        this.name = name;
        this.color = color;
        
        this.fix = fix;
        this.moving = moving;
    }
    
    cost(kms) {
        return this.fix + kms*this.moving;
    }
    
    getname() {
        return this.name;
    }
};

class Comparator {
    constructor(brands) {
        this.brands = brands;
    }
    
    bestCost(kms) {
        let minCost = 1e9;
        let minBrand = "None";
        
        this.brands.forEach(function(el) {
            let cost = el.cost(kms);
            
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
    constructor(brands) {
        super(brands);
    }
}
