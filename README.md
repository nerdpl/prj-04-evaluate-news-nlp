# Evaluate News NLP

## Table of Contents

* [Project Info](#project_info)
* [List of files](#list_of_files)
* [Functions](#functions)

## Project_Info

The subject of the project was to setup webpack enviroment (Webpack, Express, Node.js, Sass, Service Workers), create separate developement and production configurations for webpack and set up webpack dev server for the developement configuration. The app uses the Aylien API to evaluate user specified webpage and update the project webpage with the results.

## List_Of_Files

src\client
- index.js

src\client\js
- formHandler.js

src\client\styles
- base.scss
- footer.scss
- form.scss
- header.scss
- resets.scss

src\client\views
- index.html
    
src\server
- index.js
- mockAPI.js

package-lock.json
package.json
process.env
README.md
webpack.dev.js
webpack.prod.js

## Functions

Server side (src\server\index.js)
- Setup express server, body parser and cors.
- getApiData()
    Sends user URL and receives the evaluation from Aylien API.
- sendData()
    Setup a route to receive URL and respond with the evaluation.

Client side (src\client\js\formHandler.js)
- handleSubmit()
    Runs the rest of the funcions in specific order after the submit button is clicked.
- postData()
    Sends the URL to the server side and receives the evaluation. Updates the DOM with the results.