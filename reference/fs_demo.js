const fs = require("fs");
const path = require("path");

//create folder --------------------------------
// fs.mkdir(path.join(__dirname, "/testFolder"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder Created");
// });

//Create and write to file --------------------------------
// fs.writeFile(path.join(__dirname, "/testFolder", "hello.txt"), "Hello World", (err) => {
//   if (err) throw err;
//   console.log("File Created");
// });

// Overwite or append to the file --------------------------------
// fs.writeFile(path.join(__dirname, "/testFolder", "hello.txt"), "hello world.", (e) => {
//   // Overwite to the file
//   if (e) throw e;
//   console.log("test created");
//   // Append to the file
//   fs.appendFile(path.join(__dirname, "/testFolder", "hello.txt"), "I love node.js", (e) => {
//     if (e) throw e;
//     console.log("test created");
//   });
// });

// Read a file --------------------------------
// fs.readFile(path.join(__dirname, "/testFolder", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename a file --------------------------------
// fs.rename(path.join(__dirname, "/testFolder", "hello.txt"), path.join(__dirname, "/testFolder", "helloWorld.txt"), (err) => {
//   if (err) throw err;
//   console.log("File renamed");
// });

// Delete a file --------------------------------
// fs.unlink("testFolder/Test.txt", (err) => {
//   if (err) throw err;
//   console.log("deleted");
// });
