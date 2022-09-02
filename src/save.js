import fs from 'fs'
const text = 'lorem ipsum :)';
// writeFile - очищает файл и добавляет тот текст что указан, если файла нет - то создает
fs.writeFileSync('lorem.txt', text, (err) => { //Used writeFileSync, because need sync:D
    if(err) {
      console.log('Произошла ошибка.')
    } 
    else {
      console.log('Файл сохранен.')
    }
}) 
// тут должен быть код, который сохранит текст из переменной в файл lorem.txt 

// appendFile - просто добавляет тот текст что указан, если файла нет - то создает 
