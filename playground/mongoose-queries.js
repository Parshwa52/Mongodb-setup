const mongoose=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID}=require('mongodb');
var id="ff1af0a100acf92e646d609";


if(!ObjectID.isValid(id))
{
    console.log("Id not valid");
}
else{
    Todo.findById(id).then((todo)=>{
        if(!todo)
        {
            return console.log("No ID");
        }
        console.log(todo);
    }).catch((e)=>console.log(e));
}
/*Todo.find({_id:id}).then((todos)=>{
    console.log('Todos',todos);
});

Todo.findOne({_id:id}).then((todo)=>{

    console.log('Todo',todo);
});*/

