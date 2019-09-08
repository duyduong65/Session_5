let array = [];
let cout = 1;
for (let i = 0; i < 10; i++) {
    let element = Number(prompt("Nhập vào phần tử thứ " + cout + " của mảng"))
    array[i] = element;
    cout++;
}
document.getElementById('first_array').innerHTML = "array: [ " + array + " ]";

function findMaxNumber_inArray() {
    let MaxNumber = array[0];
    for (let j = 0; j < array.length; j++) {
        if (MaxNumber < array[j]){
            MaxNumber = array[j];
        }
    }
    document.getElementById('maxNumber').innerHTML = "Số lớn nhất trong mảng là: " + MaxNumber;
}
