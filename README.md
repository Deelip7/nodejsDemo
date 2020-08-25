# Nodejs Demo

> Install package manager  
```shell
$ npm init
```

> Installs all devDependencies
```shell
$ npm install
```

> devDependencies 
```shell
$ npm install -D nodemon 
```

```javascript
{
  "name": "nodejs-practice",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index", // ADD INDEX.js
    "dev": "nodemon index" // ADD INDEX.js
  },
}
```

> Heroku Deploy  
```shell
$ heroku login
$ heroku create
$ heroku git:remote -a thawing-falls-30759
$ git push heroku master    
$ heroku open   
```
