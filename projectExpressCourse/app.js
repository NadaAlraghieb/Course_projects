let express = require('express')

let app = express()
 app.enable('trust proxy')
 console.log(app.enabled('trust proxy'))
let courses=[
    {
        id:0,
        title:"API"
    },
    {
        id:1,
        title:"javaScript"
    }
]
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get('/', function(req,res){
    res.json(courses)
})

app.post('/', function(req,res){
    let newCourses ={
        id:req.body.id,
        title:req.body.title
    };
    courses.push(newCourses)
    console.log(courses)
})

app.put('/:id', function(req,res){
    let found =courses.find(function(item){
        return item.id === parseInt(req.params.id)
    })
    if(found){
        let update ={
            id: found.id,
            title:req.body.title
        }
        let targetIndex = courses.indexOf(found)
        courses.splice(targetIndex,1,update)
        res.send(courses)
    }else{
        res.sendStatus(404)
    }
})

app.delete('/:id', function(req,res){
    let found1= courses.find(function(item){
        return item.id === parseInt(req.params.id)
    })
    if(found1){
        let targetIndex1 = courses.indexOf(found1)
        courses.splice(targetIndex1,1)
        res.send(courses)
    }else{
        res.send(404)
    }
})
app.get('/user',function(req,res){
    res.send('my name is:'+ req.body.name)
})

app.get('/:name', function(req,res){
    res.send('my name is:'+ req.params.name)
})

app.listen(3040 , function(){
    console.log('started port at 3040')
})