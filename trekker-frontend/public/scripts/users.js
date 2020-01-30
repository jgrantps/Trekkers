
function configurationParams() {
  
  const submittedName = document.getElementById("login-name").value
  const submittedPassword = document.getElementById("login-password").value
  const submitParams = {name: submittedName, password: submittedPassword}
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(submitParams)
  }
  return configurationObject;
};

function handleOnUsersLogIn() {
  
  const logInBtn = document.getElementById("login-btn");
  logInBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    fetch(`http://localhost:3000/login`, configurationParams())
    .then(response => response.json())
    .then(user => processLogin(user));
  });
}

function processLogin(user) {
  console.log(user)
  var id = user.data.id
  
  if ( isNaN(id) === false) {
    showDashboard(user);
  } else {
    console.log("not logged in")
  }
}


function showDashboard(user) {
  const welcomeModal = document.getElementById("sign-in")
  const mainPage = document.getElementById("main-page")

  welcomeModal.setAttribute("class", "hidden")
  mainPage.setAttribute("class", "")



};

function handleOnUserSignup() {
  const signUpBtn = document.getElementById("signup-btn")
  signUpBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    fetch(`http://localhost:3000/users`, configurationParams())
      .then(response => response.json())
      .then(user => processSignUp(user));
  });
};

function processSignUp(user) {
  console.log(user);
}


function handleOnUserLogOut() {
  const logOutBtn = document.getElementById("logout-btn");
  logOutBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    fetch(`http://localhost:3000/logout`, configurationParams())
    .then(response => response.json())
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


}