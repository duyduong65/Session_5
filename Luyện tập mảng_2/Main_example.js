function ex_1() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= 5; j++) {

        }
    }
}

function ex_2() {

    let array = [];
    for (let i = 0; i < 10; i++) {
        let element = prompt("Nhập vào 10 phần tử của mảng: ");
        array.push(element);
    }
    let arrayReverse = array.reverse();
    arrayReverse = arrayReverse.join("");
    document.write(arrayReverse);
}