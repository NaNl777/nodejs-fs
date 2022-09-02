// тут код, который удалит файл lorem.txt

import fs from 'fs';

fs.unlinkSync('lorem.txt', (err, data) => {
    if(err) {
        console.log('Произошла ошибка!')
    }
    else {
        console.log('Файл успешно удален')
    }
})
