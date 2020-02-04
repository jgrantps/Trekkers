function handleOnUsersLogIn() {
  
  const logInBtn = document.getElementById("login-btn");
  logInBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const login = api.post(`/login`, config.access())
    .then(user => processLogin(user));
    
    
  });
}

function processLogin(user) {
  var alertButton = document.getElementById("alert-div");
  if (user.message === "Login Failed, Please Try Again!") {
    alertButton.setAttribute("class", "alert-wrapper")
    alertButton.innerText = user.message
  }
  else {
    USER = new User(user);
    console.log(user)
    alertButton.setAttribute("class", "hidden")
    alertButton.innerText = ""
    showDashboard(user); 
    loadCharactersAndSelections(user);
  }
}


function showDashboard(user) {
  const welcomeModal = document.getElementById("sign-in")
  const mainPage = document.getElementById("main-page")
  const nameSpace = document.getElementById("name-space")
  welcomeModal.setAttribute("class", "hidden")
  mainPage.setAttribute("class", "")
  nameSpace.innerText = user.data.attributes.name
};



function handleOnUserSignup() {
  const signUpBtn = document.getElementById("signup-btn")
  signUpBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    const signUp = api.post(`/users`, config.access())
    .then(user => processSignUp(user));
  });
};

function processSignUp(user) {
  
  var alertButton = document.getElementById("alert-div");

  if (user.reason === "error!") {
    alertButton.setAttribute("class", "alert-wrapper")
    alertButton.innerText = "Signup Error - Try Again!"
    
  }
  else {
    alertButton.setAttribute("class", "hidden")
    alertButton.innerText = ""
    showDashboard(user); 
  }
}


function handleOnUserLogOut() {
  const logOutBtn = document.getElementById("logout-btn");
  logOutBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const logOut = api.post(`/logout`, config.access())
    .then(user => logoutScreen(user));
  });
}

function logoutScreen(user) {
  const welcomeModal = document.getElementById("sign-in");
  const mainPage = document.getElementById("main-page");

  if (user.message === "you are logged out") {
    welcomeModal.setAttribute("class", "entry-modal")
    mainPage.setAttribute("class", "hidden")
  console.log(user)
  } else {
    console.log("error!  you need to fix your logout!")
  }
};

function loadCharactersAndSelections(input) {
  var selections;
  if (input.data === undefined) {
    selections = USER.selections
    console.log(selections);
  }else{
     selections = input.data.attributes.selections;
  }
  // var characters = input.data.attributes.characters;
  const nameList = document.getElementById('saved-name-list');
  nameList.innerHTML = '';
  for (selection of selections) {
     updateUserSelectionList(selection);
  };
}