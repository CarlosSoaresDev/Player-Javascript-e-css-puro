var audio = new Audio();

var progress = document.getElementById('_progress');
var timeAct = document.getElementById('_time_act');
var timeFull = document.getElementById('_time_full');
var title = document.getElementById('_title');
var artist = document.getElementById('_artist');

audio.addEventListener('canplay', () => {
    timeAct.innerHTML = formater(audio.currentTime);
    timeFull.innerHTML = formater(audio.duration);
    progress.max = audio.duration;
    progress.value = audio.currentTime;
}, false);

audio.addEventListener('timeupdate', () => {
    timeAct.innerHTML = formater(audio.currentTime);
    progress.value = audio.currentTime;
}, false);

var index = 0;
var playList = [
    { file: './src/music/Timecop1983 - On the Run.mp3', title: 'On the Run', artist: 'Timecop1983' },
    { file: './src/music/Volt Age - Dawn Hunter (feat. Jakob Betke).mp3', title: 'Dawn Hunter (feat. Jakob Betke)', artist: 'Volt Age' },
    { file: './src/music/A.L.I.S.O.N - Space Echo.mp3', title: 'Space Echo', artist: 'Alison' }

];

const load = () => {

    audio.src = playList[index].file;
    audio.load()
    title.innerHTML = playList[index].title;
    artist.innerHTML = playList[index].artist;
}

const play = () => {

    audio.play();
    document.getElementById('_play').setAttribute('hidden', 'true')
    document.getElementById('_pause').removeAttribute('hidden')
}

const onChangeTimeUpdate = (value) => {

    audio.currentTime = value;
    play();
}

const onChangeVolume = (value) => {

    audio.volume = (value / 100);
}

const pause = () => {

    audio.pause();
    document.getElementById('_pause').setAttribute('hidden', 'true')
    document.getElementById('_play').removeAttribute('hidden')
}

const previous = () => {

    index--;
    if (index < 0) { index = playList.length - 1 }

    audio.src = playList[index].file;
    audio.load();
    audio.play();
    title.innerHTML = playList[index].title;
    artist.innerHTML = playList[index].artist;
}

const next = () => {

    index++;
    if (index >= playList.length) { index = 0 }
    audio.src = playList[index].file;
    audio.load();
    audio.play();
    title.innerHTML = playList[index].title;
    artist.innerHTML = playList[index].artist;
}

const formater = (sec) => {

    sec = Math.floor(sec);
    let HH = Math.floor(sec / 3600);
    let mm = Math.floor((sec - (HH * 3600)) / 60);
    let ss = sec - (HH * 3600) - (mm * 60);

    mm < 10 ? mm = "0" + mm : null
    ss < 10 ? ss = "0" + ss : null

    return time = `${mm}:${ss}`;
}