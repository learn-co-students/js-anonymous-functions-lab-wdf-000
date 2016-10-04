$(document).ready(prepareButtons);

var jukeboxSongs = { "taylor swift": "in the clear", "beyonce": "halo", "drake": "hotline bling"};
var artists = Object.keys(jukeboxSongs);
var theArtist = artists[Math.floor(Math.random()) * artists.length];
var songToPlay = jukeboxSongs[theArtist];

function randomNumber() {
  return Math.floor(Math.random());
}

function prepareButtons(){
  menu();
  play();
  pause();
  show();
}


function handleMenuClick(e){
  $('#menuOptions').html("You can play a song, pause a song, or view all the songs");
}
function menu() {
  $('#menu').on('click', handleMenuClick);
}

function clickPlay(e){
  $('#songPlaying').html("now playing " + songToPlay + " by " + theArtist);
  return "now playing " + songToPlay + " by " + theArtist;
}
function play() {
  $('#play').on('click', clickPlay);
}

function handlePauseClick(e){
  $('#songPaused').html(songToPlay + " is paused");
}
function pause() {
  $('#pause').on('click', handlePauseClick);
}

function handleShowClick(e) {
  var songs = "";
  for (var key in jukeboxSongs) {
    songs += jukeboxSongs[key] + " by " + key +  " is available to play. "
  }
  $('#showSongs').html(songs);
}
function show() {
  $('#show').on('click', handleShowClick);
}
