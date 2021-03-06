
var express = require('express');
var Twitter = require('twitter');

var twit = new Twitter({
  consumer_key: 'gbOtIZ0C1cQD0643Sp9MG5lOL',
  consumer_secret: 'N4Sfna456Gz9fzjDBSxuutlkB8oopaE6Ax3gSTbF2FTEsKWQSd',
  access_token_key: '3304536349-DAegsFYTqZCsnHMXWM0O2DVhCrvkOiLUF8UbWAx',
  access_token_secret: 'mmqMqbxYFHR342aFJJfSps4AG6Pap2rsyS7KKcBjxrkC0'
});

// Path to our public directory

var pub = __dirname + '/public';

// setup middleware

var app = express();
app.use(app.router);
app.use(express.static(pub));
app.use(express.errorHandler());

// Optional since express defaults to CWD/views

app.set('views', __dirname + '/public');

// Set our default template engine to "jade"
// which prevents the need for extensions
// (although you can still mix and match)
app.set('view engine', 'jade');

var messages = [];

var drivers = [{tweet:'AK'}, {tweet:'gboy'}, {tweet:'JJ'}, {tweet:'SVZ'}];

function Tweet(tweet) {
  this.tweet = tweet;
}


var grabTweets = function(req, res){
  console.log("GRABBING TWEETS")
  twit.get('search/tweets', {q: 'hpde'}, function(error, tweets){
    // console.log('tweets',tweets.statuses[0]);
    messages=[];
    for(var i=0; i<7; i++){
      var message = new Tweet(tweets.statuses[i].text);
      messages.push(message);           
    }
    console.log(messages)
    // res.render('index', { messages: messages });
    res.json({ messages: messages });
  });
};


// console.log("drivers ========= ", drivers);

////////////////////////////////////////////////////////////


app.get('/', function(req, res){
  res.render('index', { messages: messages });
});

app.post('/main', function(req, res){
  res.redirect('/');
});

app.post('/tires', function(req, res){
  res.render('tires');
});

app.post('/brakes', function(req, res){
  res.render('brakes');
});

app.get('/login', function(req, res){
  res.render('login');
});

app.post('/login', function(req, res){
  res.redirect('/');
});

app.post('/logout', function(req, res){
  res.render('logout');
});

app.post('/user', function(req, res){
  res.render('user');
});

app.get('/getTwit', grabTweets);

app.listen(3000);
console.log('Express app started on port %d', 3000);

