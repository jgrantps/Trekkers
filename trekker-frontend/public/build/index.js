console.log('hello world')

// const BASE_URL = "http://localhost:3000"
// //..
// const USERS_URL = `${BASE_URL}+/users`
// const NEW_USER_URL = `${BASE_URL}+/users`
// const USER_ID
// const USER_URL = `${BASE_URL}+/users/${USER_ID}`
// //..
// const CHARACTERS_URL = `${BASE_URL}+/characters`
// const NEW_CHARACTER_URL = `${BASE_URL}+/characters`
// const CHARACTER_URL = `${BASE_URL}+/characters/${CHARACTER_ID}`

// //..
// const KITS_URL = `${BASE_URL}+/kits`

document.addEventListener('DOMContentLoaded', function(e) {
    selectSeriesOnSubmit();
});

function selectSeriesOnSubmit() {
    var seriesButtons = document.getElementsByClassName("series-btn");
    for (let element of seriesButtons) {
        element.addEventListener("click", function(){
            console.log(element.getAttribute("value"))
        })
    }

    
    // seriesButton.foreach( element => console.log(element.getAttribute('value')));
        // console.log(this.getAttribute("value"));

    // console.log(seriesButton)
    // return seriesButton
}