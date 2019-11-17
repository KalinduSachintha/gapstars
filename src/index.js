const { getRandomWordSync, getRandomWord } = require('word-maker');
const fs = require('fs');
var writeStream = fs.createWriteStream("harverengineeringexercise.txt");

console.log('It works!');
writeToFile('Synchronous Solution');
for (let i = 1; i <= 10; i++) {
    try {
        if(i%3 == 0 && i%5 == 0){
        writeToFile(i +": FizzBuzz");    
    } else if(i%3 == 0){
        writeToFile(i +": FIZZ");
    }else if(i%5 == 0){
        writeToFile(i +": Buzz");
    }else {
        writeToFile(i +": "+ getRandomWordSync({withErrors: true}));
    }
    } catch (error) {
        writeToFile(i +": It shouldn't break anything!!");
    }    
}
writeToFile('---------------------');
writeToFile('Asynchronous Solution');
for (let i = 1; i <= 15;i++) {
    
    if(i%3 == 0 && i%5 == 0){        
        writeToFile(i +": FizzBuzz");
    } else if(i%3 == 0){
        writeToFile(i +": FIZZ");
    }else if(i%5 == 0){
        writeToFile(i +": Buzz");
    }else {
        getRandomWord({ withErrors: true }).then((fulfille)=> {
            writeToFile(i +": "+fulfille);
        }).catch(()=> {	
            writeToFile(i +": It shouldn't break anything!!");
        });
    }
}
function writeToFile(text)
{    
    writeStream.write(text+ "\n");    
}
