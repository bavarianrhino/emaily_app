

Node
======
- Javascript runtime used to execute code outside of the browser

Express
======
- Library that runs in the Node runtime. Has helpers to make dealing with HTTP faster


What Node and Express do
======
- When you run a server on your machine, your machine will be listening for traffic at a particular port.
- NodeJS is what is specifically listening at that port. It takes that traffic and then hands it to express.
- Express looks at request and decides and what chunk of code will handle the response to the request.
- These chunks are route handlers which will process the request and then generate a response that we produce. 

Heroku Checklist Before Deployment
======
- Dynamic Port Binding - Heroku tells us which port our app will use, so we need to make sure we listen to the port they tell us to.
- Specify Node Environment - We want to use a specific version of node, so we need to tell Heroku which version we want. - package.json
- Specify start script - Instruct heroku what command to run to start out server running - package.json
- Create .gitignore file - we don't want to include dependencies, heroku will do that for us.

   Command to remove tracked files on github but not remove from local 
   $git rm -r --cached node_modules

Heroku First Deployment
======
- Create Heroku account
- Commit codebase to Git
   $ git --version
- Install Heroku CLI and Create App
   $ heroku login
   $ heroku create
- Deploy App with Git
   $ git remote add heroku https://git.heroku.com/infinite-springs-15013.git
   $ heroku buildpacks:set heroku/nodejs
- Heroku then Deploys the App
   $ git push heroku master
- Navigate to https://dry-cove-84361.herokuapp.com to see application
- Heroku Subsequent Deployments
   $ git add .
   $ git commit -M "message"
   $ git push heroku master

   also don't forget to do...

   $ git push origin master


Passport Library Components
======
- passport - General helpers for handling auth in express apps
- passport strategy - Helpers for authenticating with one very specific method (email/password, google, facebook etc.)

Google Login Setup
======
- Connect to Google API http://console.developers.google.com
- Client ID & Secret
   ID - Public token we can share this with the public
   Secret - Private token we don't want anyone to see - Hide so not public on github

Cookie Based Authentication
======
- After logging in, server will set a cookie/token using a response in header
- Will store token in cookies that is stored in memory
- This cookie auth has short comings but good for this app.

MongoDB
======
- Uses collections to store data, and every collection contains records.
- Is schema-less
- Mongoose
   Model class to represent entire collection in MongoDB
   Model instance are js objects that represent one of the records in a collection of MongoDB
