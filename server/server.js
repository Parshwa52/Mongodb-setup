var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var express=require('express');
var bodyParser=require('body-parser');

var app=express();


app.use(bodyParser.json());
app.post('/todos',(req, res)=>{
    //console.log(req.body);
    var newTodo=new Todo({
        text:req.body.text
        //completed:false,
        //completedAt:10
    });
    
    newTodo.save().then((doc)=>{
    
        res.send(doc);
    },(e)=>{
            res.status(400).send(e);
    });
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
})

});

app.listen(3000);

/*var newTodo2=new Todo({
    text:'    Play Chess 2   '
    //completed:false,
    //completedAt:10
});

newTodo2.save().then((doc)=>{

    console.log('Saved Todo',doc);
},(e)=>{
        console.log('unable to do');
});*/