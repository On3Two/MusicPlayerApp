const image = document.getElementById('cover'),
      title = document.getElementById('music-title'),
      artist = document.getElementById('music-artist'),
      currentTimeEl = document.getElementById('current-time'),
      durationEl = document.getElementById('duration'),
      progress = document.getElementById('progress'),
      playerProgress = document.getElementById('player-progress'),
      prevBtn = document.getElementById('prev'),
      nextBtn = document.getElementById('next'),
      playBtn = document.getElementById('play'),
      background = document.getElementById('bg-img')


const music = new Audio();

const songs = [
    {
        path: 'assets/AllMyLife.mp3',
        displayName: "All my life",
        cover: 'assets/amfcover',
        artist: 'Sheff G (Feat. Sleepy Hallow)'
    },
    {
        path: 'assets/2AM.mp3',
        displayName: "2A.M.",
        cover: 'assets/2amcover',
        artist: 'King Von'
    },
    {
        path: 'assets/762god.mp3',
        displayName: "7.62 God",
        cover: 'assets/2amcover',
        artist: 'Pooh Shiesty'
    }
]



