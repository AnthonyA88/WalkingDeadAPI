// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/
var characters = [
  {
    name: "Rick Grimes",
    gender: "Male",
    occupation: "Police Officer",
    stillAlive: true
  },
  {
    name: "Shane Walsh",
    gender: "Male",
    occupation: "Police Officer",
    stillAlive: false
  }
]
// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/profile', function apiIndex (req, res){
  //This is the place I am going to put an introduction page
  res.json({    
    name: "Anthony Arata",
    githubLink: "https://github.com/AnthonyA88",
    currentCity: "San Mateo",
    linkedIn: "https://www.linkedin.com/in/aarata/",
    pets: 
        [{
          name: "Freckles",
          type: "Dog",
          breed: "Staffordshire Terrier"
        },
        {
          name: "Chip",
          type: "Rat",
          breed: "Hooded Rat"
        }]
  })
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to the world of The Walking Dead from a fan's viewpoint",
    documentationUrl: "https://github.com/AnthonyA88/WalkingDeadAPI", // CHANGE ME
    baseUrl: "https://agile-crag-72037.herokuapp.com/", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
    ]
  })
});

// INDEX
app.get('/api/characters/', function apiShow(req, res) {
  res.json({
    "characters": characters
  })
});

// SHOW
app.get('/api/characters/:id', function apiShow(req, res) {
  var character_id = req.params.id
  res.json({
    "characters": characters
  })
});

// CREATE
app.post('/api/characters/', function apiShow(req, res) {

  var newCharacter = req.body;
  characters.push(newCharacter);
  res.json({
    "newCharacter": newCharacter
  })
});

// UPDATE 
app.put('/api/characters/:id', function apiShow(req, res) {
  var characterID = req.params.id;
  var updateInfo = req.body;
  // TODO: Look up the character and change the data to updateInfo.
  res.json({
    "characters": characters
  })
});

app.delete('/api/characters/:id', function apiShow(req, res) {
    var characterID = req.params.id;
    // TODO: Iterate through your characteres, and splice out the one with a matching characterID
  res.json({
    "characters": characters
  })
});



/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
