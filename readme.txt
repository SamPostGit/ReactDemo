Assignment 3


* Date Created: 02 11 2019
* Last Modification Date: 10 11 2019

## Authors


* Samuel Post sm324409@dal.ca 


## Getting Started on Bluenose
Navigate to http://129.173.22.35:5000/

*Note that the backend is not connected to a real database on Bluenose
and will allow any credintials to signin/signup. The code will work
with a database localy with minor modifications

## Getting Started Localy

build a mysql database on the local machine with username and password as root
Navigate to '/project'
create a schema using 'database.sql' found in project
run 'yarn'
run 'yarn start'
run 'node server'
A window displaying the home page should open on your browser

Note: Some lines of code need to be modified to be used Localy
In SignIn.js and SignUp.js the fetch api calls need to replace the urls with
'http://localhost:5001/signin2' and 'http://localhost:5001/signup2' respectivly


### Prerequisites

The machine running this code will require yarn and a mysql instance
yarn can be installed using 'sudo npm install yarn'

## Built With


* [React](https://reactjs.org/) - The web framework used
* [yarn](https://yarnpkg.com/lang/en/) - Package manager
* [node](https://nodejs.org/en/) - The server framework
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Used for routing within the React application
* [express](https://expressjs.com/) - The library used to connect the server to the front end application
* [Knex](http://knexjs.org/) - Used for database connection and queries
* [React-Bootstrap](https://react-bootstrap.github.io/) - Used for CSS templates
* [MySQL Workbench](https://www.mysql.com/products/workbench/) - Used to create the database

## Sources Used

The create-react-app boilerplate was used to create this project
The readme file was made based off of the template given in this class

### File Names
serviceWorker.js
App.css
App.test.js
logo.svg
Lines 0 - n
---------------
All code in these files is untouched from the boilerplate generation
All other code is written by myself

### File Name
banner.png
banner2.png
---------------
These photos where taken by Hiroyuki Sasaki
and I was given permission to use them as I please


## Acknowledgments

Thanks to Hiroyuki Sasaki for taking the photos
The Mec website for giving inspiration
Assignment 2 for Advance Databases for giving me a starting point