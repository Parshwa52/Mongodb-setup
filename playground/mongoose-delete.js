const mongoose=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID}=require('mongodb');
var id="5f1b337dcf106d61484f3ecc";


if(!ObjectID.isValid(id))
{
    console.log("Id not valid");
}
else{

    //var id='';
    Todo.findByIdAndRemove(id).then((todo)=>{
            console.log(todo);
    })
    /*Todo.findById(id).then((todo)=>{
        if(!todo)
        {
            return console.log("No ID");
        }
        console.log(todo);
    }).catch((e)=>console.log(e));*/
}
/*Todo.find({_id:id}).then((todos)=>{
    console.log('Todos',todos);
});

Todo.findOne({_id:id}).then((todo)=>{

    console.log('Todo',todo);
});*/

