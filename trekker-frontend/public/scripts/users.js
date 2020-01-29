function handleOnUserSignup() {
  var form = document.getElementById("sign-up-form")
  var configurationObject;
  var formData;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();

    let userName = e.target["0"].value;
    let userPassword = e.target["1"].value;

    formData = {
      name: userName, password: userPassword
    }

    configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    }


    fetch(`http://localhost:3000/login`, configurationObject)
      .then(response => response.json())
      .then(user => console.log(user));
  });


};