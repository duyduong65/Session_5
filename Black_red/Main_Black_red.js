let array_1 = [];
let array_2 = [];
let elementRandom;
let score1 = 0;
let score2 = 0;

function gameSimple() {
    for (let i = 1; i <= 52; i++) {
        array_1.push(i);
    }
    for (let i = 0; i < array_1.length; i++) {
        elementRandom = Math.floor(Math.random() * array_1.length);
        array_2.push(array_1[elementRandom]);
        array_1.splice(elementRandom, 1);
    }
    document.getElementById("user_1").innerHTML = array_1;
    document.getElementById("user_2").innerHTML = array_2;
}

function startGame() {
    for (let i = 0; i < array_1.length; i++) {
        if (array_1[i] > array_2[i]) {
            score1++;
        } else if (array_1[i] < array_2[i]) {
            score2++;
        }
    }
    if (score1 > score2) {
        alert("Bên A Win");
        array_1 = [];
        array_2 = [];
    } else if (score1 < score2) {
        alert("Bên B Win");
        array_1 = [];
        array_2 = [];
    } else {
        alert("Hòa");
        array_1 = [];
        array_2 = [];
    }
}