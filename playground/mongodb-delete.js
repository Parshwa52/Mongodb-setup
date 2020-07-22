const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  /*db.collection('Todos').deleteMany({text:'Just never give up'}).then((result)=>{
      console.log(result);
  });*/

  /*db.collection('Todos').deleteOne({text:'Just never give up'}).then((result)=>{
    console.log(result);
})*/

/*db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    console.log(result);
});*/
db.collection('Users').findOneAndDelete({_id:new ObjectID('5f1818883caed0691ef9ee59')}).then((result)=>{
    console.log(result);
});


  db.close();
});
