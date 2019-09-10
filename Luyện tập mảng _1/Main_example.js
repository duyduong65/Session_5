function ex1() {
    let array = [1, 3, 4, 22, 54, 23, 2, 77, 9, 10];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10) {
            document.write(array[i] + "-");
        }
    }
}

function ex2() {
    let array = [1, 3, 4, 22, 54, 23, 2, 77, 9, 10];
    let maxNumber = array[0];
    let length;

    for (let i = 0; i < array.length; i++) {
        if (maxNumber < array[i]) {
            maxNumber = array[i];
            length = i;
        }
    }
    document.write("max number: " + maxNumber + " " + "length: " + length);
}

function ex3() {
    let array = [1, 3, 4, 22, 54, 23, 2, 77, 9, 10];
    let maxNumber = array[0];
    let trungbinh = 0;
    for (let i = 0; i < array.length; i++) {
        if (maxNumber < array[i]) {
            maxNumber = array[i];
        }
        trungbinh = trungbinh + array[i]
    }
    trungbinh = trungbinh / array.length;
    document.write("số lớn nhất là: " + maxNumber + " " + "trung bình của mảng là: " + trungbinh);
}
function ex4() {
    
}