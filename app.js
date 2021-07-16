const express = require("express");
const app = express();
const cron = require("node-cron");
const fs = require('fs')

cron.schedule("*/10 * * * * *", () => {
  console.log("running a task every ten seconds");
});

// const addOne = () =>{
//   for (let i = 0; i =)
// }


app.get('/', (req, res) =>{

  res.sendFile(__dirname + "/index.html");
})

// Ola can you see me now?
// Check the chat
// the problem basically is how to output the the json to my browser
// Are you there??
// Yes I am
// Don't do res.sendFile() in the cron job
// You can set a timer or update a variable, then fetch that back and update during the cron job's execution
// I have no idea how to do this 
// Do a setTimeout, learn how to do it in node; 
// use setTimeout() update a varable
// Should I do it inside this app.get?
// Create a global varable and add 1 to it everytime in the cron job
// i am trying to think
// Don't use the setTimeout()
// Ola, I still don't know how exactly to go about this
// Okay, we will have a brief session after now; or maybe tomorrow. I'll show you how it works
// tomorrow is far
// lets do it after now
// Ola??????
// I'm in a meeting, when I'm done
// Okay na

const port = 3000;
app.listen(port, () => {
  console.log("server started on port " + port);
});
