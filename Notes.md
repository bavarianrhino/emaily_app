

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

Cookie Session Explained
======
- The cookie IS the session
- when navigating to new route, a `console.log(req.session)`
```
{
    - passport: {
        user: '595fc8f1fe63a8937dde1eed'
    }
}
```
- CookieSession doesn't actually pass data to passport, just populates the req.session with data
- Passport references the req.session object 
- Another library called express-session that accomplish same thing in different ways (The way the data is stored)
- Can only use 14kb of data


Express-Session Explained
======
- CookieSession uses the cookie as the session where express-session references to a session inside the cookie.
- Takes session id and then looks up relevant info from a 'session store' which can store arbitrary amounts of info
- Can put as much data as we want in session store but need to set up compatible store (Outside service)

JS ASYNC
======
```javascript

// Outdated 
function fetchAlbums() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums').then(res => res.json()).then(json => console.log(json));
}

// Modern
async function fetchAlbums() {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()
    
    console.log(json)
}

// Refined Best Practice
const fetchAlbums = async () => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()
    
    console.log(json)
}

```

Webpack
======
- was loaded by create-react-app
- is module loader...takes multiple js files and handles them down to one file
- comes built in that sees css files and knows how to parse them

React Stripe Checkout
======
- node package on client side that does the heavy lifting in recieving and passing back tokens
- mainly used in Payments.js that comes with attributes name, description, amount, token and stripeKey.
- Need to provide button within component
- Every stripe method like above returns a chainable promise which can be used instead of a regular callback

Body Parser
======
- Express gotcha handled with this. When make post request, express does not parse by default the payload
- This takes the request body and parses it in a middleware before it hits the route handlers.
-  Access it by calling req.body property

HOW TO BUILD ON HEROKU
======
- Before deploying to Heroku, need to npm run build in client directory.
- Every time something is changed, you need to build before deploying every time.
- Traditionally we done commit out build assets to git
- Heroku does not care about the client side configuration and need to code a run script in package.json

Web Hook
======
- Anything where an outside API that facilitates an outside process that notifies our application through a callback that an event happened.
- SendGrid will be accessing our POST Route /api/surveys/webhooks

SendGrid
======
- Testing email functionality through axios using chrome terminal. Uncomment axios import and run following code in chrome.
```javascript

const survey = {title: 'my title', subject: 'my subject', recipients: 'rjriesenberger@gmail.com', body: 'this is the email body'};
axios.post('/api/surveys', survey);

```
- At first should produce a promise that is pending. Should see displayed in terminal and network tabs

Global State vs. Component State
=====
- Main question to ask is if that piece of data is ever used by another component anywhere else in your application?
:sparkles:
:apple: