import Player from './lib/jasmine_examples/Player';
import Song from './lib/jasmine_examples/Song';


const mySong = new Song('My Favorite Song');

// Create a new player instance and play the song
const myPlayer = new Player();
myPlayer.play(mySong);

// Check if the player is playing and log the song title if true
if (myPlayer.isPlaying) {
  console.log(`Now playing: ${mySong.title}`);
}