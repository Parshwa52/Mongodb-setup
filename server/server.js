var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var express=require('express');
var bodyParser=require('body-parser');
const {ObjectID}=require('mongodb');

var app=express();

const port=process.env.PORT || 3000;
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

app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id))
    {
        return res.status(404).send();
    }
    else{
        Todo.findById(id).then((todo)=>{
            if(!todo)
            {
              return res.status(404).send();
                        }
                        //else{
            res.send({todo});
        }).catch((e)=>console.log(e));
    }
    //res.send(req.params);
});

app.delete('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id))
    {
        return res.status(404).send();
    }
    else{
        Todo.findByIdAndRemove(id).then((todo)=>{
            if(!todo)
            {
              return res.status(404).send();
                        }
                        //else{
                            res.status(200).send();
            res.send({todo});
        }).catch((e)=>{res.status(400).send();console.log(e);});
    }
});

app.listen(port,()=>{
    console.log(`on port ${port}`);
});

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