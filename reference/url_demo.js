const url = require("url");

const myUrl = new URL("http://test.com/hello.html?id=100&status=active");

// Serialized URL --------------------------------
console.log(myUrl.href);
console.log(myUrl.toString());

//  Host (root domain) --------------------------------
console.log(myUrl.host); //test.com:5000

//  hostname (doest get port) --------------------------------
console.log(myUrl.hostname); //test.com

//  Pathname --------------------------------
console.log(myUrl.pathname); // /hello.html

//  Serialized Query --------------------------------
console.log(myUrl.search); // ?id=100&status=active

//  Perams Objects --------------------------------
console.log(myUrl.searchParams); // { 'id' => '100', 'status' => 'active' }

// ADD Perams Objects --------------------------------
console.log(myUrl.searchParams.append("abc", "123"));
console.log(myUrl.searchParams); // { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// Loop through Perams --------------------------------
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));
//id:100
//status:active
//abc:123
