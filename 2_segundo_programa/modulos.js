const fs = require('fs')

fs.readFile('arquivo1.txt', 'utf-8', (err, data) => {
    if (err){
        console.log(err)
        return  
    }

    console.log(data)
})