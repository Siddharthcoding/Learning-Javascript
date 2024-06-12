const clock = document.getElementById('clock')


setInterval(function(){     // repeats continuosly sfter given interval
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)