const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

const {User} = require('../server/models/user');

// Todo.remove({}).then((result) =>{
//   console.log(result);
// });

// Todo.findByIdAndRemove({_id: '5bfb1287e5fcb96c0dc58383'}).then((todo) => {
//   //console.log(todo);
// });

Todo.findByIdAndRemove('5bfb1287e5fcb96c0dc58383').then((todo) => {
  console.log(todo);
});