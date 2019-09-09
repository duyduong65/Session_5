let caro = document.getElementById('carogame');
let board = []
let data = "";
for (let i = 0; i < 5; i++) {
    board[i] = ['.', '.', '.', '.', '.'];

}
for (let j = 0; j < 5; j++) {
    data += "<br>";
    for (let i = 0; i < 5; i++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
caro.innerHTML = data;

function chanvalue_x() {
    let lineChange = Number(prompt("Nhập vào vị trí hàng muốn chọn: "));
    let columnChange = Number(prompt("Nhập vào vị trí cột muốn chọn: "));

    data = "";
    board[lineChange][columnChange] = "X";
    for (let i = 0; i < 5; i++) {
        data = data + "<br>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    caro.innerHTML = "<hr>" + data;
}
function chanvalue_o() {
    let lineChange = Number(prompt("Nhập vào vị trí hàng muốn chọn: "));
    let columnChange = Number(prompt("Nhập vào vị trí cột muốn chọn: "));

    data = "";
    board[lineChange][columnChange] = "O";
    for (let i = 0; i < 5; i++) {
        data = data + "<br>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    caro.innerHTML = "<hr>" + data;

}
