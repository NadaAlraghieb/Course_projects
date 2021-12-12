const fs=require('fs');
let keyWord='sleep';
        let arr =[]
fs.readFile('./text.txt','utf-8',(err,data)=>{
    if(err){
        console.log('Error!')
    }else{
        arr= data.split('.');
       arr.forEach((elm)=>{
           if(elm.includes(keyWord)){
               console.log(elm)
           }
       })
       
    }
})