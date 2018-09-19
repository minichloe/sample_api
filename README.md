# Sample REST API
This is a simple application using an Express server to serve a single GET route (the attached fake json file). It uses an instance of axios customized to the server running on localhost to execute the GET request and parse through the data. The data is converted into an object for easy look up of personnel data.

## Instructions to run
1. $ npm i
2. $ npm start

This will run the server and immediately make the GET request, then close the server. The parsed data is logged to the console.
