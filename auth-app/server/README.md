# topzone-server
# Auth-App-Server

## description of the project

This project is an Auth-App used for authenticate signup and login for users.
<br>
<br>
# Server Url
## [Deployed Link on Heroku](https://topzone-task.herokuapp.com/)
<br>

## Configuration

- README.md - contains documentation
- .env - contains env variables (should be git ignored)
- .gitignore - contains a .gitignore file
- package.json - contains npm package config
- server.js - the entry point for your application
- src/ - contains your core application files and folders and server file which contains the main server
<br>

## Dependecies

```js
{
    "express": "^4.18.1",
    "body-parser": "^1.20.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express-jwt": "^5.3.1",
    "express-validator": "^5.3.0",
    "formidable": "^2.0.1",
    "jsonwebtoken": "^8.5.1",
    "lodash": "^4.17.21",
    "mongoose": "^6.5.2",
    "mongose": "^0.0.2-security",
    "morgan": "^1.10.0",
    "supervisor": "^0.12.0",
    "uuid": "^8.3.2"
}
```


## Routes

## Auth Routes

| method | path                                         | Description            |
| ------ | -------------------------------------------- | ---------------------- |
| POST   | api/v1/users/signup                            | Signup user account  |
| POST   | api/v1/users/signin                       | signin          |


## Installation

## .env sample 
```js
{
MONGODB_URI=mongodb+srv://12345:12345@cluster0.u6ppf.mongodb.net/?retryWrites=true&w=majority
PORT=5000
SECRET=hdfskjhfksjdfsdf5s2d3f6sf54s53df4s3dfsdf5435s4fd534fd
}
```
server requires Node.js v14+ to run.

Install the dependencies and devDependencies and start the server.

    cd server
    npm i
    npm start


## License

MIT

