const path = require("path");

//Base file name
// console.log(path.basename(__filename));

// Directory name
// console.log(path.dirname(__filename));

//File extension
// console.log(path.extname(__filename));

//Create path object
// console.log(path.parse(__filename).base); --> path_demo.js
// console.log(path.parse(__filename));
//------------ OUTPUT ----------------
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\theel\\Desktop\\GitClones\\NodeJS Practice\\reference',
//     base: 'path_demo.js',
//     ext: '.js',
//     name: 'path_demo'
//   }

//Concatenate paths
console.log(path.join(__dirname, "test", "test.html"));
//C:\Users\theel\Desktop\GitClones\NodeJS Practice\reference\test\test.html
