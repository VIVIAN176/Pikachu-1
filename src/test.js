// const string = `你好号和潘金莲的多久发送`
// let n = 1
// demo.innerText = string.substr(0, n)

// let setInterval(() => {

//     console.log(n + `:` + string.substr(0, n))
//     demo.innerText = string.substr(0, n)
//     n += 1

//     if (n > string.length) {
//         window.clearInterval(id)
//         return
//     }
// }, 200)

import string from './css.js'

let id

const player = {
    id: undefined,
    time: 100,
    n: 1,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        // '#btnPause': player.pause,  //在申明这个对象的时候就开始用这个对象了
        // '#btnPlay': player.play,
        '#btnPause': 'pause',  //在申明这个对象的时候就开始用这个对象了
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerText = string.substr(0, player.n)
        player.bindEvents()
        player.play()
    },
    //哈希表达式的运用
    // document.querySelector('#btnPause').onclick = player.pause

    bindEvents: () => {
        //字符串
        for (let key in player.events) {
            const value = player.events[key]
            document.querySelector(key).onclick = player[value]
        }
        //player['pause']
        //player['play']
        //player['slow']
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        demo.innerText = string.substr(0, player.n)
        // document.getElementById("demo2").innerHTMl = string.substr(0, n)
        demo2.innerText = string.substr(0, player.n)


        demo2.scrollTop = 99999;
    },

    play: () => {
        id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(id)
        console.log('33')
        console.log(id)
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}

player.init()

