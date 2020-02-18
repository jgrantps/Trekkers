const api = new ApiAdapter;
const authenticate = new AuthenticationAdapter;
const config = new ConfigAdapter;
const checkFor = new userDataCheckAdapter;
const process = new ProcessorAdapter;
const action = new ActionsAdapter;
var USER;

document.addEventListener('DOMContentLoaded', function (e) {
  action.selectSeriesOnSubmit();
  action.handleOnCharacterSubmit();
  action.handleOnSelectionDelete();
  authenticate.logIn();
  authenticate.signup();
  authenticate.logOut();
  
});