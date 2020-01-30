

  
  




// function configurationParams() {
//   const submittedName = document.getElementById("login-name").value
//   const submittedPassword = document.getElementById("login-password").value
//   const submitParams = {name: submittedName, password: submittedPassword}
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(submitParams)
//   }
//   return configurationObject;
// }

function handleOnUsersLogIn(configurationObject) {
  
  
  const logInBtn = document.getElementById("login-btn");
  logInBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    fetch(`http://localhost:3000/login`, configurationObject)
    .then(response => response.json())
    .then(user => console.log(user));
  });
}

function handleOnUserSignup(configurationObject) {
  const signUpBtn = document.getElementById("signup-btn")
  signUpBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    fetch(`http://localhost:3000/users`, configurationObject)
      .then(response => response.json())
      .then(user => console.log(user));
  });
};
