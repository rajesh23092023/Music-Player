const music = new Audio('Music/m1.mp3');
// music.play();



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artist_bx = document.getElementsByClassName('Artist_bx')[0];


pop_art_right.addEventListener('click', () => {
    Artist_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    Artist_bx.scrollLeft -= 330;
});




const songs = [

    {
        id:"1",
        songName: `Ashique 2 <br>
         <div class="subtitle">Mithoon</div>`,
        poster: "Image/img1.jpg",
    },
    {
        id:"2",
        songName: `Finding her  <br>
         <div class="subtitle">Kushagra</div>`,
        poster: "Image/img2.jpg",
    },
    {
        id:"3",
        songName: `Fnine Cars  <br>
         <div class="subtitle">Audiq5</div>`,
        poster: "Image/img3.jpg",
    },
    {
        id:"4",
        songName: `Bye  <br>
         <div class="subtitle">Aditya Bhardwaj</div>`,
        poster: "Image/img4.jpg",
    },
    {
        id:"5",
        songName: `Heer  <br>
         <div class="subtitle">Ali & Shjr</div>`,
        poster: "Image/img 5.jpg",
    },
    {
        id:"6",
        songName: `Kho Gaye  <br>
         <div class="subtitle">Kho Gaye</div>`,
        poster: "Image/img 6.jpg",
    },
    {
        id:"7",
        songName: `Maand  <br>
         <div class="subtitle">Bayaan</div>`,
        poster: "Image/img 7.jpg",
    },
    {
        id:"8",
        songName: `Heeriye  <br>
         <div class="subtitle">Jasleen Royal</div>`,
        poster: "Image/img 8.jpg",
    },
    {
        id:"9",
        songName: `Ishq Hai  <br>
         <div class="subtitle">Anurag Saikia</div>`,
        poster: "Image/img 9.jpg",
    },
    {
        id:"10",
        songName: `Love Aaj Kal  <br>
         <div class="subtitle">Pritam</div>`,
        poster: "Image/img 10.jpg",
    },
    {
        id:"11",
        songName: `Duniya Meri  <br>
         <div class="subtitle">G.v.Prakash</div>`,
        poster: "Image/img 11.jpg",
    },
    {
        id:"12",
        songName: `Sajan  <br>
         <div class="subtitle">Darshan Raval</div>`,
        poster: "Image/img 12.jpg",
    },
    {
        id:"13",
        songName: `Asal Main  <br>
         <div class="subtitle">Darshan Raval</div>`,
        poster: "Image/img 13.jpg",
    },
    {
        id:"14",
        songName: `Dard  <br>
         <div class="subtitle">Darshan Raval</div>`,
        poster: "Image/img 14.jpg",
    },
    {
        id:"15",
        songName: `Out of Control  <br>
         <div class="subtitle">Darshan Raval</div>`,
        poster: "Image/img 15.jpg",
    },

]

// Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
//     e.getElementsByTagName('img')[0].src = songs[i].poster;
//     e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

// });


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.add(' bi-pause-fill');
        masterPlay.classList.remove(' bi-play-fill');

    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove(' bi-pause-fill');
        masterPlay.classList.add(' bi-play-fill');
    }
})
// let pop_song_left = document.getElementById('pop_song_left');
// let pop_song_right = document.getElementById('pop_song_right');
// let pop_song = document.getElementsByClassName('pop_song')[0];


// pop_song_right.addEventListener('click', () => {
//     pop_song.scrollLeft += 330;
// });
// pop_song_left.addEventListener('click', () => {
//     pop_song.scrollLeft -= 330;
// });

// let pop_art_left = document.getElementById('pop_art_left');
// let pop_art_right = document.getElementById('pop_art_right');
// let Artist_bx = document.getElementsByClassName('Artist_bx')[0];


// pop_art_right.addEventListener('click', () => {
//     Artist_bx.scrollLeft += 330;
// });
// pop_art_left.addEventListener('click', () => {
//     Artist_bx.scrollLeft -= 330;
// });





let index = 0;
let poster_master_play = getElementById('poster_master_play');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `Music/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
    })
})












