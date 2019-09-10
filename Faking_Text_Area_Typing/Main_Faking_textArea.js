let arrayString = ["H", "ì", "n", "h", " ", "N", "h", "ư", " ", "C", "ó", " ", "G", "ì", " ", "Đ", "ó", " ", "S", "a", "i", " ", "S", "a", "i", "!", "!", "!"];
let n = "";

function faking() {

    let stringInput = document.getElementById('inputText').value;
    let stringLength = stringInput.length;
    if (stringLength > 0) {
        for (let i = 0; i <= stringLength; i++) {
            n = n + arrayString[i];
            if (i === 27) {
                document.getElementById('inputText').value = " ";
                n = "";
            }
        }
    }
   document.getElementById('inputText').value = n;
    n = "";

}

