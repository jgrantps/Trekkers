class userDataCheckAdapter {

    character(element) {
        console.log(element)
        let foundCharacter;
    let newCharacter = (foundCharacter = USER.characters.find(character => character.id == element.id)) ? 
    foundCharacter : new Character(element);
    return newCharacter;
    }


}