const express = require('express')
const app = express()
const mongoose=require("mongoose")
const port = 5000
app.use(express.json())
const personSchema=new mongoose.Schema({
    person:{
    name: String,
    age: Number
  }
})

const person = mongoose.model('person',personSchema)
const pers = await person.create({
    name:"Kais",
    age : 32
    
})
/* pers.save(); */
console.log(pers.name);
/* personSchema.methods.speak = function speak() {
    const greeting = this.name
      ? "my Name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };
  
 
  person.find({ name: "Kais" }); */
/*
let PersonModel = require('./person')
let msg = new PersonModel({
    name:"Kais",
    age: 32,
    favoriteFoods:["salade"]
})
msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })
  
  ;

module.exports = mongoose.model('person', personSchema)*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))