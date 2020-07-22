const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  
db.collection('Users').findOneAndUpdate({_id:new ObjectID('5f17fda33caed0691ef9ee55')},
{
    $set:{
        name:'Parshwa2'
    },
    $inc:{
        age:-2
    }
}
    ,{
        returnOriginal:false
}).then((result)=>{
    console.log(result);
});


  //db.close();
});
