# API-REST-Authenticate-JWT-And-CRUD

This small project is a prototype of a REST API developed in node (for more information, click here: https://nodejs.org) and non-relational database MongoDB (for more information click here: https://www.mongodb.com).

The basic "CRUD" is available with some enpoints using verbs POST, GET, PATCH, DELETE and how to create and login users safely. In the security part was used the traditional JWT Authentication - Json Web Token - (for more information click here https://jwt.io).


## Clone repository:
> git clone https://github.com/claudineicaetano/API-REST-Authenticate-JWT-And-CRUD.git

## Download and install the database 
The mongoDB can be downloaded from the official website on https://www.mongodb.com/download-center?jmp=nav access the site, download and unzip.
Create a directory for data:
> mkdir mongo-data

Locate the *bin* folder and *mongod* file, usually in *mongo/bin/mongod* and run
> ./mongo/bin/mongod --dbpath ~/mongo-data

### Install libraries:
It's imperative to install the libraries before running the server.

> npm install


## configure the authentication keys and database parameters:
Create a configuration file in the ./server/config/config.json directory to set the database access settings and JWT authentification secret keys.

```javascript
{
   "test": {
     "PORT": 3000,
     "MONGODB_URI": "mongodb: // localhost: 27017 / TodoAppTest",
     "JWT_SECRET": "poiupouerwe344987"
   },
   "development": {
     "PORT": 3000,
     "MONGODB_URI": "mongodb: // localhost: 27017 / TodoApp",
     "JWT_SECRET": "poiupoqrasdfasdr3tertr"
}
```
## Run server
And finally run the node to *up* the REST API. In the project directory, run the command
> node server/server.js

## Testing
With the postman or similar, make a request with POST at http://localhost:3000/users endpoint passing the paramentros

```javascript
{
"email": "testing@example.com",
"password": "24sfdf3dfs"
}
```
The answer expect is like that:
```javascript
X-Powered-By →Express
x-auth →eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmZlZDEzOWVmMTYxZWMxYjljNzQxNDkiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQzNDI2MzYxfQ.HtBrCq54H_pwTSlA7f-X1Vf6UlpbfzC0DZTcuAwGwiY
Content-Type →application/json; charset=utf-8
Content-Length →74
ETag →W/"4a-aOb7+qMl/5p3/HHWhJ8+5c6pIPY"
Date →Wed, 28 Nov 2018 17:32:41 GMT
Connection →keep-alive
