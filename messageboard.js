class MessageBoard extends Comparator {
    constructor(divid, brands) {
        super(brands);
        this.divid = divid;
        this.brands = brands;
        
        this.requests = [];
        this.printedRequests = [];
    }
    
    add(request) {
        this.requests.push(request);
        console.log("Request, successfully added.");
        console.log(this.requests);
    }
    
    empty() {
        let board = document.getElementById("mainBoard");
        while (board.firstChild) board.firstChild.remove();
    }
    
    update() {
        let oldthis = this;
        let brands = this.brands;
        
        // Add all the values again
        this.requests.forEach(function(req) {
            if (oldthis.printedRequests.indexOf(req.id) > -1) return;
            else oldthis.printedRequests.push(req.id);
                        
            let table = document.createElement('table');
            table.setAttribute('id', req.id);
            table.className = 'request';

                // Main Row
                let mainrow = document.createElement('tr');
                
                let iconcell = document.createElement('td');
                let iconContainer = document.createElement('span');
                let iconContent = document.createTextNode(req.brand.getname());
                iconContainer.appendChild(iconContent);
                iconContainer.className = 'icon ' + req.brand.getname();
                iconcell.appendChild(iconContainer);
                mainrow.appendChild(iconcell);
                
                let mincell = document.createElement('td');
                let minContent = document.createTextNode(req.mins + 'min');
                mincell.appendChild(minContent);
                mainrow.appendChild(mincell);
                
                let price = Math.round(req.brand.cost(req.mins), 2);
                let pricecell = document.createElement('td');
                let priceContent = document.createTextNode(price + '€');
                pricecell.appendChild(priceContent);
                mainrow.appendChild(pricecell);
                
                let buttoncell = document.createElement('td');
                let buttonContent = document.createElement('button');                
                let buttonText = document.createTextNode('Més info');
                
                buttonContent.addEventListener('click', function() {
                    switchHidden(req.id);
                }, false);
                
                buttonContent.appendChild(buttonText);
                buttoncell.appendChild(buttonContent);
                mainrow.appendChild(buttoncell);
                
                table.appendChild(mainrow);
                
                // Prices comparation row
                let pricerow = document.createElement('tr');
                pricerow.className = 'toHide';
                let brandsrow = document.createElement('tr');
                brandsrow.className = 'toHide';
                
                brands.forEach(function (brand) {
                    price = Math.round(brand.cost(req.mins), 2);
                    pricecell = document.createElement('td');
                    priceContent = document.createTextNode(price + '€');
                    
                    if (brand.getname() == req.brand.getname()) {
                        pricecell.className = 'lowestPrice';
                    }
                    
                    pricecell.appendChild(priceContent);
                    pricerow.appendChild(pricecell);
                    
                    let brandContainer = document.createElement('td');
                    let brandContent = document.createTextNode(brand.getname());
                    
                    if (brand.getname() == req.brand.getname()) {
                        brandContainer.className = 'lowestPrice';
                    }
                    
                    brandContainer.appendChild(brandContent);
                    brandsrow.appendChild(brandContainer);
                });
                
                table.appendChild(brandsrow);
                table.appendChild(pricerow);
                
            document.getElementById("mainBoard").appendChild(table);
        });
    }
};
