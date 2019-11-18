require("dotenv").config();

var inquirer = require("inquirer");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

start();
// function which prompts the user for what action they should take
function start() {
    inquirer
      .prompt({
        name: "startsearch",
        type: "list",
        message: "What would you like to search?",
        choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says", "Exit"]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.startsearch === "concert-this") {
          concertSearch();
        }
        else if(answer.startsearch === "spotify-this-song") {
          spotifySearch();
        } 
        else if(answer.startsearch === "movie-this") {
          movieSearch();
        }
        else if(answer.startsearch === "do-what-it-says") {
            anySearch();
          }
        else{
          connection.end();
        }
      });
  }

