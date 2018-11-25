const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// var id = '5bfaf1b3b01cea96bd78dd1e11';

// if(!ObjectID.isValid(id)){
//   console.log('ID is not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//   console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//   console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     console.log('Id is not found');
//   }
//   console.log('Todo by id:', todo);
// }).catch((e) => console.log(e));

User.findById('5bf47f5a47c72327639037e5').then((user) =>{
  if(!user){
    console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));