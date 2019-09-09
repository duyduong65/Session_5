function Translate() {
    let search = document.getElementById('searchString').value;
    let dictionary = ["red", "yellow", "blue", "green"];
    let thenTranslate = ["đỏ", "vàng", "xanh lục", "xanh lá"];


    for (let i = 0; i < dictionary.length; i++) {
        if (dictionary[i] === search) {
            document.getElementById('showString').value = thenTranslate[i];
        } else if(thenTranslate[i] === search){
            document.getElementById('showString').value = dictionary[i];
        }
    }
}