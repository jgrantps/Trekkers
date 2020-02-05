const api = new ApiAdapter;
const authenticate = new AuthenticationAdapter;
const config = new ConfigAdapter;
const checkFor = new userDataCheckAdapter;
const process = new ProcessorAdapter;
var USER;

document.addEventListener('DOMContentLoaded', function (e) {
  selectSeriesOnSubmit();
  handleOnCharacterSubmit();
  handleOnSelectionDelete();
  authenticate.logIn();
  authenticate.signup();
  authenticate.logOut();
  
});