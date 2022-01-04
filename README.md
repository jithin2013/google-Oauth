# google-Oauth - created by jithin kv
    provides a test repo for google Oauth method demostration
    node verison used : 13.14.0
    packages used : express,passport,passport-google-oauth20,cors,body-parser,cookie-session

# Steps to follow
    create a google developer account and setup project and Oauth cliend id and secret
    create a express server
    create authentication models using passport js
    create success api and failed url redirect.
    use cookie storage to setup storage for further authentication of users




# Steps to run
    clone the repo using git clone command
    use "npm i" to install the required node modules
    use command "node . app.js" or "nodemon app.js" to run the project


# Details of demo app

    - Initially app loaded with base url : http://localhost:3000/
    - google authentication use this link and provide google accout details,demo account details(username: jithin.kv2022@gmail.com,password : jithin2022) : http://localhost:3000/google
    - Once authenticated app redirect to /success and it will show the email which the authentication is done
    - To logout use http://localhost:3000/logout
    - Then try to access http://localhost:3000/success it will say unauthorised





