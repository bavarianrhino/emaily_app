## Survey[] (Survey Array)
>A large feedback-collection app. This mega app includes the full gamut of features, including everything from authentication to email handling. The app can be used to send mass emails to a big list of users for the purpose of collecting feedback.

<div align="center">
    <a href="https://dry-cove-84361.herokuapp.com/"><img src="client/src/media/imgs/surveyarray3.png" /><a>
</div>

## 🌎 Motivation
> Full-Stack Web application that profiles the advanced features of React, Redux, Express.js, Node.js, and MongoDB.
## 🎬 Demo
<div align="center">
    <img width="640px" src="client/src/media/imgs/readme_workflow.gif">
    <p>Login in through Google or Facebook Auth</p>
</div>
<div align="center">
    <img width="640px" src="client/src/media/imgs/readme_workflow1.gif">
    <p>Add and purchase credits through secure Stripe Gateway</p>
</div>
<div align="center">
    <img width="640px" src="client/src/media/imgs/readme_workflow2.gif">
    <p>Send survey with form validation and persist response via webhooks</p>
</div>

## 🔬 Learning Objectives
* Architectural considerations of building a full stack app
* Connect a front-end <b>Create-React-App</b> server to a <b>NodeJS and Express backend</b>
* Communicate data from the <b>Mongo</b> database to the React application
* Understand how to route user requests on the front end with <b>React Router</b> and on the backend with Express
* Build reusable user inputs with <b>Redux Form</b>, complete with navigation
* Handle credit cards and receive payments from users with <b>Stripe</b>
* Engage users with automated <b>emails</b>
* Enhance authentication flows in the app with <b>Google OAuth authentication</b>
* Separate production and development resources with advanced <b>API key handling techniques</b>
* Educate users on how to use the app with custom build landing pages

## 🛠 Tech/Framework Stack
🌖<b>Front-End</b>
- React.js, React-Redux, React-Router-Dom, React-Stripe-Checkout
- Redux, Redux-Form, Redux-Thunk
- JavaScript, ES6
- Lodash
- http-proxy-middleware
- Materialize-css
- JSS
- Axios


🌘<b>Back-End</b>
- Mongo Database
- MongoDB.Atlas (For deployed Database)
- Mongoose Schema
- Node.js
- Express.js
- 0auth
- Concurrently
- Cookie-Session
- Local Tunnel
- Passport.js
- Path
- Path-Parser
- Send Grid
- Stripe


☁️<b>API</b>
- Google Client API
- Stripe API
- Send Grid API
  
🚀<b>Deployment</b>

- [Heroku](https://dry-cove-84361.herokuapp.com/)

## 💻 Local Env Installation

🔨 <b>Install</b>
```zsh
npm install && npm install --prefix client
```
🔨 <b>Development Configuration</b>

Create a file "dev.js" in /config and paste the following configuration keys with appropriate values.
```javascript
module.exports = {
    googleClientID: '',
    googleClientSecret: '',
    mongoURI: '',
    cookieKey: '',
    stripePublishableKey: '',
    stripeSecretKey: '',
    sendGridKey: '',
    redirectDomain: ''
};
```
🔨 <b>Run the application</b>

To start the application run the following command.
```zsh
npm run dev
```
## 🚧 TODO
- Flip survey card and show responses in circle chart
- Facebook, Instagram, & Pintrist Auth Login
- Hamburger menu on mobile 

<!-- ## 🛠 Tech Stack

- [GatsbyJS](https://www.gatsbyjs.org/) - Static site generation built on React and GraphQL
- [Emotion](https://emotion.sh/docs/introduction) - CSS in JS
- [FontAwesome](https://fontawesome.com/) - Social link icons
- [Netlify](https://www.netlify.com/) - Hosting and continuous deployment

## 🗺 Site Map

    /
    /landing

1. [Home](https:///)
1. [Login](https://) -->
