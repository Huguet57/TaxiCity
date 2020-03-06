class MessageBoard {
    constructor(divid) {
        this.divid = divid;
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
        
        // Add all the values again
        this.requests.forEach(function(req) {
            if (oldthis.printedRequests.indexOf(req.id) > -1) return;
            else oldthis.printedRequests.push(req.id);
            
            let newMessage = document.createElement('div');
            newMessage.className = 'request ' + req.brand.getname();
            
            let table = document.createElement('table');
            
                // Header
                let header = document.createElement('th');
                let headerContent = document.createTextNode(req.brand.getname());
                header.appendChild(headerContent);
                table.appendChild(header);
            
                // Main Row
                let mainrow = document.createElement('tr');
                
                let iconcell = document.createElement('td');
                let iconContent = document.createElement('img');
                iconContent.className = 'icon ' + req.brand.getname();
                iconcell.appendChild(iconContent);
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
                buttonContent.appendChild(buttonText);
                buttoncell.appendChild(buttonContent);
                mainrow.appendChild(buttoncell);
                
                table.appendChild(mainrow);
                
            document.getElementById("mainBoard").appendChild(table);
        });
    }
};
