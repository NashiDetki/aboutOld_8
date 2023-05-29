const timeObj = document.querySelector('.header__time');
console.log(timeObj);
const dateObj = document.querySelector('.header__date');
console.log(dateObj);

const date = new Date();
dateObj.innerHTML = date.getDate() + '/'+ Number(date.getMonth() + 1) +'/' + date.getFullYear();

let count = setInterval(function() {
    let date = new Date();
    timeObj.innerHTML   =  date.getHours() + '/' + date.getMinutes() + '/' + date.getSeconds();
},1000);
