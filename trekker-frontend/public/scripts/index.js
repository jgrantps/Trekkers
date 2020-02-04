console.log('JS being Read.')
const api = new ApiAdapter;
const config = new ConfigAdapter;
const BASE_URL = "http://localhost:3000"
var USER;

// //..
// const USERS_URL = `${BASE_URL}+/users`
// const NEW_USER_URL = `${BASE_URL}+/users`
// const USER_URL = `${BASE_URL}+/users/${USER_ID}`
// //..
// const CHARACTERS_URL = `${BASE_URL}+/characters`
// const NEW_CHARACTER_URL = `${BASE_URL}+/characters`
// const CHARACTER_URL = `${BASE_URL}+/characters/${CHARACTER_ID}`

// //..
// const KITS_URL = `${BASE_URL}+/kits`

document.addEventListener('DOMContentLoaded', function (e) {
  selectSeriesOnSubmit();
  handleOnCharacterSubmit();
  handleOnSelectionDelete();
  handleOnUsersLogIn();
  handleOnUserSignup();
  handleOnUserLogOut();
  
});

function selectSeriesOnSubmit() {
  var seriesButtons = document.getElementsByClassName("series-btn");

  for (let element of seriesButtons) {
    element.addEventListener("click", function () {
      var activeButtons = document.getElementsByClassName("series-btn-active")

      for (let activeButton of activeButtons) {
        activeButton.setAttribute("class", "series-btn");
      }

      element.setAttribute("class", "series-btn-active");
      let buttonValue = this.getAttribute('value')
     
      const seriesSet = api.get(`/series/${buttonValue}`)
      .then(series => retreiveShow(series));

    });
  };
};

