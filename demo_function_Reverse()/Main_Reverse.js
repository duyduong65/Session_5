let array_demo = [-3, 5, 1, 3, 2, 10];
document.write("mảng ban đầu là: [ " + array_demo + " ]" + "<br>")
let first = 0;
let last = array_demo.length - 1;
while (first < last) {
    let midNumber = array_demo[first];
    array_demo[first] = array_demo[last];
    array_demo[last] = midNumber;
    first++;
    last--;
}

document.write("mảng sau đảo ngược là: [ " + array_demo + " ]");

