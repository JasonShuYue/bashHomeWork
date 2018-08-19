#!/usr/bin/env node

var fs = require("fs");
var dirName = process.argv[2];

//  判断文件是否存在

fs.exists("./" + dirName, function() {
    process.exit(0);
});

fs.mkdirSync("./" + dirName) // mkdir $1
process.chdir("./" + dirName) // cd $
fs.mkdirSync("./css");  // mkdir css
fs.mkdirSync("./js");  // mkdir js

// touch index.html css/style.css js/main.js

var  index_content = "<!DOCTYPE>\r<title>Hello</title>\r<h1>Hi</h1>";
var  style_content = "h1{color: red;}";
var  main_content = "var string = \"Hello World\"\ralert(string)";

fs.writeFileSync("./index.html", index_content);
fs.writeFileSync("./css/style.css", style_content);
fs.writeFileSync("./js/main.js", main_content);

process.exit(0);

