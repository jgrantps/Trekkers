

function processLogin(user) {
  var alertButton = document.getElementById("alert-div");
  if (user.message === "Login Failed, Please Try Again!") {
    alertButton.setAttribute("class", "alert-wrapper")
    alertButton.innerText = user.message
  }
  else {
    USER = new User(user)
    USER.refreshUserDashboard
  console.log(USER)
    alertButton.setAttribute("class", "hidden")
    alertButton.innerText = ""
    showDashboard(USER); 
  }
}

function processSignUp(user) {
  var alertButton = document.getElementById("alert-div");
  
  if (user.reason === "error!") {
    alertButton.setAttribute("class", "alert-wrapper")
    alertButton.innerText = "Signup Error - Try Again!"
  } else {
    alertButton.setAttribute("class", "hidden")
    alertButton.innerText = ""
    showDashboard(user); 
  }
}


function showDashboard(input) {
  const welcomeModal = document.getElementById("sign-in")
  const mainPage = document.getElementById("main-page")
  const nameSpace = document.getElementById("name-space")
  welcomeModal.setAttribute("class", "hidden")
  mainPage.setAttribute("class", "")
  nameSpace.innerText = input.name
};


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