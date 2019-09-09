function Translate() {
    let search = document.getElementById('searchString').value;
    let dictionary = ["red", "yellow", "blue", "green"];
    let result = ["đỏ", "vàng", "xanh lục", "xanh lá"];


    for (let i = 0; i < dictionary.length; i++) {
        if (dictionary[i] === search) {
            document.getElementById('showString').value = result[i];
        } else if(result[i] === search){
            document.getElementById('showString').value = dictionary[i];
        }
    }
}