console.log("test"); /*Вывод в консоли текста*/
var message = "Hello!"
console.log(message); /*Вывод в консоли переменной*/


var ball = document.querySelector("#ball"); /*выбрать элемент по селектору*/
/*ball.style.background = "red";*/
ball.style.width = "100px";
ball.style.height = "100px";
ball.style.top = "150px"; /*поскольку поменялся размер шарика, меняем положение по вертикали, чтобы шар был по центру*/
ball.style.left = "250px"; /*меняем положение по горизонтали, чтобы шар был по центру*/
ball.textContent = "Воин";
ball.style.lineHeight = "6em";
ball.style.color = "white";
ball.style.textAlign = "center";

/*функция для получения случайного числа*/
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


var i = 0;

ball.onclick = function () {
    i = i + 1;
    console.log(i) /*Вывод в консоли переменной i*/
    stars.innerText = i;

    ball.style.top = getRandomInt(300); /*по вертикали в случайном порядке*/
    ball.style.left = getRandomInt(500); /*по горизонатали в случайном порядке*/
    ball.style.background = "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")"; /*меняем цвет в случайном порядке*/
}

console.dir(ball);

var lifes = document.querySelector("#lifes");
console.log(lifes);

var stars = document.querySelector("#stars");
stars.style.color = "black";
stars.onclick = function () {
    i = 0;
    stars.innerText = i;

}
console.dir(stars);
lifes.innerHTML = "<span></span><span></span><span></span><span></span><span></span>"
/*lifes.style.background = "red";*/




