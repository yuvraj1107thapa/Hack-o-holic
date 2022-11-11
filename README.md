# BechdeNitsLocal
🌀 BECHDE - E-commerce project made with React ,Express ,Node ,Mongo

### User Permissions
---

#### Students
* register himself on the app
* provide various details like  profile link, email, phone number, username
* upload details of a product to be sold online (to be verified by admin)
* can view all products from all sellers
* edit the products he has uploaded
* edit privacy settings
* change his password
* search for various products and contact the concerned student by live chatting 
* delete a product when it is sold
* can give feedback 

#### Admin
* view and edit the products user has uploaded 
* approve a product (if admin flags as appropriate then only, all users will be able to see that product online. This is to ensure that no fake or obscene images are uploaded as   well as no vulgar language is used )
* view the feedback section of different user
* view the information of all users
* view the status of orders i.e order pending, order rejected, order success
* upload details of his own product to be sold online

### A note to the viewers
---

1. You can try logging in as an admin by entering the following credentials:
* **Email:** Pranjal112@gmail.com
* **Passward:** Pranjal112

2.You can also register yourself as a student and then login to view the options available to a student or use the following credentials:
* **Email:** pranjaldas5003@gmail.com
* **Passward:** pranjaldas5003

## View Live App
**Hosted at**: https://bechdenits.herokuapp.com/

### Tech Stack Used
* **MongoDB** - Document database - to store data as JSON
* **Express.js** - Back-end web application framework running on top of Node.js
* **React** - Front-end web app framework used
* **Node.js** - JavaScript runtime environment

### Middleware
* Mongoose
* JWT authentication

### Steps followed to setup the project
---
#### Setting up server and database
1. Install npm packages required for backend side :
```Javascript
npm init
npm i -D nodemon
```
2. Modify the package.json by adding the following scripts to it :
```Javascript
  "start": "node server.js",
  "server": "nodemon server.js",
 ```
 3. Create an account on MongoDB cloud Atlas, thereafter, creating a database on it and get your MongoURI
 4. Modify server.js to get connected to the database, using the MongoURI and also add the following lines at the end of server.js :
 ```Javascript
 const port = process.env.PORT || 5000;
 app.listen(port, ()=> console.log(`Server started running on port ${port}`));
 ```
 5. Type the following command to get your server running on your localhost and ensure hot-reloading, when the server-side code is modified :
 ```Javascript
 npm run server
 ```
 6. Add JWT token based authentication and 'cors' module and use them in server.js.
 7. Make Schemas for various collections to be stored in database and export them from a folder models and the REST APIs for various routes in the folder routes.
 
 ### Setting up the React client
 1. Install npm packages required for frontend side :
```Javascript
npm init
```
 2. Add proxy in frontend package.json
 ```Javascript
"proxy": http://localhost:5000
 ```
 
## Deployment
***
1. Add the following lines to server.js :

 ```Javascript
// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  ```
2.Add the following script to the package.json of server
```Javascript
 "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
```
3. Install Heroku CLI and make sure you have intialised a git repository in the project directory. Enter the following commands in the terminal :
```Javascript
heroku login
heroku create
git add .
git commit -am "Deployed to Heroku"
git push heroku master
```
4.Open your heroku account and click on Open App option in the dashboard.

### Routes 
- `/user` Routes
#### Get `/signup` Signup Page Route
#### Get `/login` Login Page Route
#### Get `/logout` Logout a logged in user
#### Get `/` Home Page Route
#### Get `/about` About Page Route
#### Get `/contact` Contact Page Route
#### Get `/services` Services Page Route
#### Get `/dashboard` Dashboard Page Route
#### Get `/feedback` Feedback Page Route
#### Get `/customer` CustomerPage Route
#### Get `/report` Report Page Route
#### Get `/sellproduct` Sellproduct Page Route
#### Get `/buy` Buy Page Route
#### Get `/sell` Sell Page Route
#### Get `/selledit` Selledit Page Route
#### Get `/message` Message Page Route


***
