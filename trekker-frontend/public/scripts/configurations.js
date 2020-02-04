class ConfigAdapter {

    deleteSelection(id) {
    var deletionPackage = {USER, id}
    
    const configurationObject = {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify(deletionPackage)
    }
    
    return configurationObject;
    };

    addCharacter(character) {
        var characterPackage = {character, USER}
        
        const configurationObject = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(characterPackage)
        }
        return configurationObject;
    };

    access() {
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





}