let newArray = [];
let x = 0;
function addElement() {
    let addElement = document.getElementById('arrayElement').value;
    newArray[x] = addElement;
    alert("Element: " + newArray[x] + " added at index " + x);
    x++;
    document.getElementById('arrayElement').value = "";
    document.getElementById('arrayElement').focus();

}

function showElement() {
    let e = "<hr>"
    for (let i = 0; i < newArray.length; i++) {
        e+= "Element " + i + " = " + newArray[i] + "<br>";
    }
    document.getElementById('showArray').innerHTML = e;
}