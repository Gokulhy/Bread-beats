
const songlist=document.querySelector('.list');
const audio = new Audio(); // Create an audio element
let currentlyPlayingAudio;

function reload(){
  const removal=document.querySelectorAll('.song')
  removal.forEach(element => {
    element.remove();
  });
}
function perform(){
  // Get the song name and access token
  second.scrollIntoView({behavior:'smooth'})
  const song = text.value.trim();
  // Call the play function
  test(song)
}

// Add an event listener to the 'search' button
const searchButton = document.getElementById('search');
const second=document.querySelector('.second')
const text = document.getElementById('search input');
searchButton.addEventListener('click', () => {
  reload();
  perform();
})

async function test(song){

  const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${song}`;

try {
	const response = await fetch(url,{
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '136cc2d1f0msh21f1001b4fd40a6p1910aajsnba1c80d78607',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }})
	const result =await response.json();
  const songs = result.data;
	console.log(songs);
    songs.forEach(song => {
      const songElement = document.createElement('div');
      songElement.classList.add('song');
      songElement.innerHTML = `
        <div class='song-data'>
         <div class="song-title">${song.title}-</div>
          <div class="song-artist">${song.artist.name}</div>
          </div>
          <div class='controls'>
            <button class='play-button'><img src='/images/play.png'></button>
          </div>`;

          const playButton = songElement.querySelector('.play-button');


          playButton.addEventListener('click', () => {
        // Check if this audio element is already playing
           if (currentlyPlayingAudio !== audio) {
          // Pause the currently playing audio, if any
          if (currentlyPlayingAudio) {
              currentlyPlayingAudio.pause();
          }

          // Set the audio source to the new song
          audio.src = song.preview;

          // Play the song
          audio.play();

          // Update the currently playing audio variable
          currentlyPlayingAudio = audio;
      } else {
          // Pause the currently playing song if the same play button is pressed again
          audio.pause();
          currentlyPlayingAudio = null;
      }
          });

          songlist.appendChild(songElement);

    songlist.appendChild(songElement);
});
} catch (error) {
	console.error(error);
}
}
function playSong(songlink) {
  audio.src = songlink;
  audio.play();
}


