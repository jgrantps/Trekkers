const api = new ApiAdapter;
const authenticate = new AuthenticationAdapter;
const config = new ConfigAdapter;
var USER;

document.addEventListener('DOMContentLoaded', function (e) {
  selectSeriesOnSubmit();
  handleOnCharacterSubmit();
  handleOnSelectionDelete();
  authenticate.logIn();
  authenticate.signup();
  authenticate.logOut();
  
});