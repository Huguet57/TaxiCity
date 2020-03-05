class MessageBoard {
    constructor(divid) {
        this.divid = divid;
        this.requests = [];
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
        // Empty previous values
        this.empty();
        
        // Add all the values again
        this.requests.forEach(function(req) {
            let newMessage = document.createElement('div');
            
            newMessage.innerHTML = req.id
                                + ", " + req.mins
                                + ", " + Math.round(req.brand.cost(req.mins), 2)
                                + ", " + req.brand.getname();
                                    
            document.getElementById("mainBoard").appendChild(newMessage);
        });
    }
};
