const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  /*db.collection('Todos').find().toArray().then((docs)=>{
      console.log("Todos");
      console.log(docs[0]._id);
      console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
      console.log("Unable to do");
  })*/
  db.collection('Users').find({name:'Andrew'}).count().then((count)=>{
    console.log("Todos count",count);
   // console.log(docs[0]._id);
    //console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    console.log("Unable to do");
})

  db.close();
});
