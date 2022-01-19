# ExpressAPI

This is a RESTful API simulation of a blog. It can be tested using any API development platform such as postman and insomnia.   


The development was done only using Javascript, specifically Node.js and its libraries for the backend mainly Express.js.

Express.js s a back end web application framework for Node.js, it is designed for building web applications and APIs.

All responses are returned in JSON format. Some API endpoints request a token to access them. 

The API allow users to do the following:

1. Index
Request:
```
http://localhost:3000/
```
Response sample:
```
{"message":"Welcome to our blog!"}
```
2. Create user (Register).
Request:
```
http://localhost:3000/
```
Response sample:
```
{"message":"Welcome to our blog!"}
```
3. login the system and get a token.
4. View all users (token required)
5. View user by id.
6. update user information.
7. delete user.
8. Get all posts 
Request:
```
http://localhost:3000/posts/
```

Response sample:
```
{
"posts":[
{"_id":"5f719c7800a6dcee3c9d50d2","title":"Good morning!","text":"Hope you have a nice day.","userId":"5f719c3b00a6dcee3c9d50d1"},   

{"_id":"5f743c5d30ba1e05944b3ffb","title":"It is a sunny day","text":"Enjoy it","userId":"5f719c3b00a6dcee3c9d50d1","__v":0}, 


{"_id":"5f76f288ca869005ee3645c6","title":"good afternoon","text":"how are you doing?","userId":"5f719c3b00a6dcee3c9d50d1","__v":0}
]
}
```
9. Create a post.
10. view one post by id.
Request:
```
http://localhost:3000/posts/5f743c5d30ba1e05944b3ffb
```

Response sample:
```
{
"post":
{"_id":"5f743c5d30ba1e05944b3ffb","title":"It is a sunny day","text":"Enjoy it","userId":"5f719c3b00a6dcee3c9d50d1","__v":0}
}
```
11. update a post.
12. delete a post.


## Getting Started

### Installing Dependencies
Node.js and npm (Node Package Manager) should be installed before running the project.

#### Frontend Dependencies

Inside the project's terminal run the following command:
```
npm install
```
Run this command to start the front-end:
```
npm start
```
Run this command to run the backend:
 ```
 node app
 ```

Open the browser and open the website using a localhost with the port 3000,  http://localhost:3000.


## Authors   

[@reem-alrashed](https://github.com/reem-alrashed) and [@Ghaidaalbohairy](https://github.com/ghaidaalbohairy) authored the API and this README.md file.

