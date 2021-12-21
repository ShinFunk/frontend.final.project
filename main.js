// switch function
function clickSwitch() {
    'use strict';
    let isA = 0;
    let btnA = document.getElementById('a');
    let btnB = document.getElementById('b');
    let divA = document.getElementById('divA');
    let divB = document.getElementById('divB');

    function setState(isA) {
        btnA.className = (isA == 0) ? 'btn inactive' : 'btn';
        divA.className = (isA == 0) ? 'boxDisplay' : 'boxNone';
        btnB.className = (isA == 1) ? 'btn inactive' : 'btn';
        divB.className = (isA == 1) ? 'boxDisplay' : 'boxNone';
    }
    setState(0);

    btnA.addEventListener('click', function () {
        if (isA == 0) return;
        isA = 0;
        setState(0);
    });
    btnB.addEventListener('click', function () {
        if (isA == 1) return;
        isA = 1;
        setState(1);
    });
};
document.addEventListener("DOMContentLoaded", clickSwitch, false);


// piano function
const whiteKeyArray = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'q', 'w', 'e', 'r', 't', 'y', 'u']
const blackKeyArray = ['s', 'd', 'g', 'h', 'j', '2', '3', '5', '6', '7']

document.addEventListener('keydown', e => {
    const key = e.key
    const whiteKeyIndex = whiteKeyArray.indexOf(key)
    const blackKeyIndex = blackKeyArray.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0 //https://www.w3schools.com/tags/av_prop_currenttime.asp
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}

// musicpad function
const musicAudio = document.getElementById("head")
const musicAudio2 = document.getElementById("abc")
const musicAudio3 = document.getElementById("benny")
const musicAudio4 = document.getElementById("rainbow")
const musicAudio5 = document.getElementById("spider")
const musicAudio6 = document.getElementById("ningNang")

const head = document.querySelector('.head')
const abc = document.querySelector('.abc')
const benny = document.querySelector('.benny')
const rainbow = document.querySelector('.rainbow')
const spider = document.querySelector('.spider')
const ningNang = document.querySelector('.ningNang')

head.addEventListener('click', playSong)
function playSong() {
    musicAudio.currentTime = 0
    musicAudio.play()
    musicAudio2.pause()
    musicAudio3.pause()
    musicAudio4.pause()
    musicAudio5.pause()
    musicAudio6.pause()

    head.classList.add('active')
    spider.classList.remove('active')
    ningNang.classList.remove('active')
    rainbow.classList.remove('active')
    abc.classList.remove('active')
    benny.classList.remove('active')
    musicAudio.addEventListener('ended', () => {
        head.classList.remove('active')
    })
}

abc.addEventListener('click', playSong2)
function playSong2() {
    musicAudio2.currentTime = 0
    musicAudio2.play()
    musicAudio.pause()
    musicAudio3.pause()
    musicAudio4.pause()
    musicAudio5.pause()
    musicAudio6.pause()

    abc.classList.add('active')
    spider.classList.remove('active')
    ningNang.classList.remove('active')
    rainbow.classList.remove('active')
    head.classList.remove('active')
    benny.classList.remove('active')
    musicAudio2.addEventListener('ended', () => {
        abc.classList.remove('active')
    })
}

benny.addEventListener('click', playSong3)
function playSong3() {
    musicAudio3.currentTime = 0
    musicAudio3.play()
    musicAudio.pause()
    musicAudio2.pause()
    musicAudio4.pause()
    musicAudio5.pause()
    musicAudio6.pause()

    benny.classList.add('active')
    spider.classList.remove('active')
    ningNang.classList.remove('active')
    rainbow.classList.remove('active')
    head.classList.remove('active')
    abc.classList.remove('active')
    musicAudio3.addEventListener('ended', () => {
        benny.classList.remove('active')
    })
}

rainbow.addEventListener('click', playSong4)
function playSong4() {
    musicAudio4.currentTime = 0
    musicAudio4.play()
    musicAudio.pause()
    musicAudio2.pause()
    musicAudio3.pause()
    musicAudio5.pause()
    musicAudio6.pause()

    rainbow.classList.add('active')
    spider.classList.remove('active')
    ningNang.classList.remove('active')
    head.classList.remove('active')
    abc.classList.remove('active')
    benny.classList.remove('active')
    musicAudio4.addEventListener('ended', () => {
        rainbow.classList.remove('active')
    })
}

spider.addEventListener('click', playSong5)
function playSong5() {
    musicAudio5.currentTime = 0
    musicAudio5.play()
    musicAudio.pause()
    musicAudio2.pause()
    musicAudio3.pause()
    musicAudio4.pause()
    musicAudio6.pause()

    spider.classList.add('active')
    rainbow.classList.remove('active')
    ningNang.classList.remove('active')
    head.classList.remove('active')
    abc.classList.remove('active')
    benny.classList.remove('active')
    musicAudio5.addEventListener('ended', () => {
        spider.classList.remove('active')
    })
}

ningNang.addEventListener('click', playSong6)
function playSong6() {
    musicAudio6.currentTime = 0
    musicAudio6.play()
    musicAudio.pause()
    musicAudio2.pause()
    musicAudio3.pause()
    musicAudio4.pause()
    musicAudio5.pause()

    ningNang.classList.add('active')
    rainbow.classList.remove('active')
    spider.classList.remove('active')
    head.classList.remove('active')
    abc.classList.remove('active')
    benny.classList.remove('active')
    musicAudio6.addEventListener('ended', () => {
        ningNang.classList.remove('active')
    })
}

