let value = Number(prompt("Nhập vào giá trị cần tìm: "));
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    if (value === array[i]){
        alert("Value " + array[i] + " found at " + i);
        break;
    }
}