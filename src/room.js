module.exports = class Room{
    
    constructor(inputFile){
        this.formattedInput = this.formatInput(inputFile);
    };

    formatInput(inputFile){
        return [inputFile] 
    };

};