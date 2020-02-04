class AuthenticationAdapter {
    s
    signup() {
        const signUpBtn = document.getElementById("signup-btn")
        signUpBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
      
          const signUp = api.post(`/users`, config.access())
          .then(user => processSignUp(user));
        });
    };

    logIn() {
        const logInBtn = document.getElementById("login-btn");
        logInBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          const login = api.post(`/login`, config.access())
          .then(user => processLogin(user));
          
          
        });
    }

    logOut() {
        const logOutBtn = document.getElementById("logout-btn");
        logOutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const logOut = api.post(`/logout`, config.access())
            .then(user => logoutScreen(user));
        });
    }

}