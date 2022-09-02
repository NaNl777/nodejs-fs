import figlet from 'figlet';
import fs from 'fs';

const textFile = fs.readFileSync('text.txt', 'utf-8', (err, data) => {
    if(err) {
      console.log(err)
    }
    else {
      console.log(data)
    }
})  

figlet(textFile, function(err, data) {
    if (err) {
        console.log('Something went wrong:(');
        console.dir(err);
        return;
    } 
    else {
         console.log(data)
    } 
});