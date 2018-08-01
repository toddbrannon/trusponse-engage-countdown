// Static Server for the 'Coming Soon' html Landing Page

const static = require('node-static');
const file = new static.Server();

require('http').createServer((req, res) => {
    req.addListener('end', () => {
        file.serve(req, res);        
    }).resume();
}).listen(process.end.PORT || 3000);

// npm install --save node-static

// git init
// git add .
// git commit -am "initial commit"

// heroku login

// heroku create <your-app-name>
// git push heroku master

// When the web app is deployed, you need to then set at least
// one instance of the app running...

// heroku ps:scale web=1

// heroku open