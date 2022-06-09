class Helper {

    constructor(){
        this.idList = [];
    }
    
    idKey(){
        
            var newIDP1 = ((Math.random() * 20) * 30).toPrecision(5);
        
            var newIDP2 = ((Math.random() * 20) * 30).toPrecision(5);
        
            var newIDP3 = ((Math.random() * 20) * 30).toPrecision(5);

            var newID = `${newIDP1}-${newIDP2}-${newIDP3}`;

            var checker = this.idList.filter(id => newID === id ? true : false);

            if(checker !== true){

                this.idList.push(newID);
                
                return newID;

            }
            else {
                
                var newerID = `${newID}-11- '${(Math.random() * 20).toPrecision(5)}'`;

                this.idList.push(newerID);
                
                return newerID;
            }       
        }
}

export default Helper;
