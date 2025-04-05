const fs = require('fs').promises;

const readFile = async ()=>{
    try {
        const [data, data2] = await Promise.allSettled([
        fs.readFile('file.txt','utf8'),
        fs.readFile('data1.txt','utf8')
    ]);
        //const data2 = await fs.readFile('data.txt','utf8')
        console.log(data.value)
        console.log(data2)
        console.log(data.status)
        console.log(data2.status)
    }catch(err){
       
        console.error(err);
    }
};
readFile();
//fulfilled
//rejected