// $(document).ready(function(){
//   menu();
//   play();
//   pause();
//   show();
// });
//
// var jukeboxSongs = { "taylor swift": "in the clear", "beyonce": "halo", "drake": "hotline bling"};
// var artists = Object.keys(jukeboxSongs);
// var theArtist = artists[Math.floor(Math.random()) * artists.length];
// var songToPlay = jukeboxSongs[theArtist];
//
// function randomNumber() {
//   return Math.floor(Math.random());
// }
//
// function menu() {
//   $('#menu').on('click', function(e) {
//     $('#menuOptions').html("You can play a song, pause a song, or view all the songs");
//   });
// }
//
// function play() {
//   $('#play').on('click', function(e) {
//     $('#songPlaying').html("now playing " + songToPlay + " by " + theArtist);
//     return "now playing " + songToPlay + " by " + theArtist;
//   });
// }
//
// function pause() {
//   $('#pause').on('click', function(e) {
//     $('#songPaused').html(songToPlay + " is paused");
//   });
// }
//
// function show() {
//   $('#show').on('click', function(e) {
//     var songs = "";
//     for (var key in jukeboxSongs) {
//       songs += jukeboxSongs[key] + " by " + key +  " is available to play. "
//     }
//     $('#showSongs').html(songs);
//   });
// }

$(document).ready(function(){
  menu();
  play();
  pause();
  show();
});

var jukeboxSongs = { "taylor swift": "in the clear", "beyonce": "halo", "drake": "hotline bling"};
var artists = Object.keys(jukeboxSongs);
var theArtist = artists[Math.floor(Math.random()) * artists.length];
var songToPlay = jukeboxSongs[theArtist];

function randomNumber() {
  return Math.floor(Math.random());
}
/////
function handleMenuClick(e) {
  $('#menuOptions').html("You can play a song, pause a song, or view all the songs");
}

function handlePlayClick(e) {
  $('#songPlaying').html("now playing " + songToPlay + " by " + theArtist);
  return "now playing " + songToPlay + " by " + theArtist;
}

function handlePauseClick(e) {
  $('#songPaused').html(songToPlay + " is paused");
}

function handleShowClick(e) {
  var songs = "";
  for (var key in jukeboxSongs) {
    songs += jukeboxSongs[key] + " by " + key +  " is available to play. "
  }
  $('#showSongs').html(songs);
}
////

function menu() {
  $('#menu').on('click', handleMenuClick);
}

function play() {
  $('#play').on('click', handlePlayClick);
}

function pause() {
  $('#pause').on('click', handlePauseClick);
}

function show() {
  $('#show').on('click', handleShowClick);
}
