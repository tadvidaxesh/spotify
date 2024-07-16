console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "let me love you-justin bieber", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "One of the girls-the weeknd", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Travis-Scott-Fein", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "On My Way-alan walker", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg"},
    {songName: "Perfect-ed sheeran", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
    {songName: "Animals-Maroon 5", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg"},
    {songName: "Nadaniya", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg"},
    {songName: "Husn-Tera-Tauba-Tauba-bad news", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Dandelions", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Arcade", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

window.onload = function() {
    const aboutButton = document.getElementById('aboutButton');
    if (aboutButton) {
        aboutButton.addEventListener('click', function() {
            window.location.href = 'about.html'; // Change this to the correct URL
        });
    }
};

// Function to handle search form submission
function handleSearch(event) {
    event.preventDefault(); // Prevent default form submission

    let searchInput = document.getElementById('searchInput').value.toLowerCase(); // Get search input value
    console.log('Searching for:', searchInput);

    // Here you can implement your search logic, such as filtering songs or navigating to search results page
}
