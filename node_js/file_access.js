//      READ FILES
//=======================

// async version

// const fs = require("fs");

// fs.readFile("text.txt", "utf8",(err, data) => {
//     if (err) { 
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// })

// console.log("out side to very async in node");

//sync version - 01
// const fs = require("fs");
// try {
//     const data = fs.readFileSync("text.txt", "utf8");
//     console.log(data);
// } catch(err) { 
//     console.error(err)
// }
// console.log("out side to very acync in node");

//sync version - 02
// const { readFile, readFileSync} = require("fs");
// try {
//     const data = readFileSync("text.txt", "utf8");
//     console.log(data);
// } catch(err) { 
//     console.error(err)
// }
// console.log("out side to very acync in node");


//  WRITE FILE
//=========================
//    async version
// const { writeFile, writeFileSync} = require("fs");

// const newContent = ' This is some new content';
// writeFile("text.txt", newContent, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("Content writen");
// });

//write after already on content
// const { writeFile, writeFileSync} = require("fs");

// const newContent = '\n This is some new content';
// writeFile("text.txt", newContent, {flag:'a'},(err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("Content writen");
// });

//sync version
//default write
// const { writeFile, writeFileSync} = require("fs");

// const newContent = '\n This is some new content';
// try {
//     writeFileSync('text.txt', newContent);
// } catch (err) { 
//     console.error(err);
// }

//append file version
// const { appendFile, appendFileSync} = require("fs");

// const newContent = '\n This is some new content';
// appendFile('text.txt', newContent, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }  
//     console.log("wede goda");
// });

//      File Renaming and deleting
//Rename
// const { rename } = require('fs');
// rename('text.txt', "newFileName.txt", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }  
//     console.log("wede goda");
// });
//delete
// const { unlink } = require('fs');
// unlink("newFileName.txt", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }  
//     console.log("wede goda");
// });