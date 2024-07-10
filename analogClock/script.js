const hr = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

setInterval(()=>{
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotate = 30 * hh + mm / 2;
    let mRotate = 6 * mm ;
    let sRotate = 6 * ss;

    sec.style.transform = `rotate(${sRotate}deg)`;
    min.style.transform = `rotate(${mRotate}deg)`;
    hr.style.transform = `rotate(${hRotate}deg)`;
},1000)