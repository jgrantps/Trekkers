

class User {
    constructor(input) {
       var  includedSelections = []
       this.input = input
        this.id = input.data.id
        this.name = input.data.attributes.name
        
        this.selections = (function() {
            includedSelections = [];
            var selectionSet = input.data.attributes.selections;
            
            for (let element of selectionSet) {
               let selection = new Selection(element);
                includedSelections.push(selection)
            }            
            return includedSelections
        })(input);
    }      
    get characters() {
       return Character.allIncludedCharacters;
    }

    findSelection(ID) {
        let selection = includedSelections.find(element => element.id === ID);
        return selection;
    }

    filterCharacterByName(i) {
        return this.characters.filter(element => element.name === i)
    }

    filterSelectionByCharacterName(i) {
        return this.selections.filter(element => element.character.name === i);
    }

    get refreshUserDashboard() {
        const nameList = document.getElementById('saved-name-list');        
        
        while (nameList.firstChild) {
            nameList.removeChild(nameList.firstChild);
          }
        //^^ Clears the DOM.

        var selectionSet = this.selections
        //^^ resets the list of User's Selections
        
        
        for (let selection of selectionSet) {
            var newOption = document.createElement('a');
            let newCharacter = selection.character;
               
                newOption.setAttribute('character_id', selection.character_id);
                newOption.setAttribute('selection_id', selection.id);
                newOption.setAttribute('class', 'select-character character-btn');
                newOption.innerText = `${newCharacter.name}`;
                setCharacterSheetAccess(newOption, newCharacter);
                nameList.insertBefore(newOption, nameList.lastChild);
            
        }
    }
}
 
let includedSelections = [];
class Selection {
    constructor(input) {
        let existingCharacter;
    
        this.id = input.id;
        this.user_id = input.user_id;
        this.character_id = input.character_id;
        this.character = (existingCharacter = includedCharacters.find(element => element.id === input.character_id)) ? existingCharacter : new Character(input.character);
        this.save();
    }     
    save() {
        includedSelections.push(this);
    }    

    static get allIncludedSelections() {
        return includedSelections; 
    }
    get delete() {
        var index = includedSelections.indexOf(this);
        includedSelections.splice(index, 1);
        var userSelectionIndex = User.selections.indexOf(this)
        User.selections.splice(index, 1)
    }   

    static find(ID) {
        let selection = includedSelections.find(element => element.id === ID);
        return selection;
    }
}    




let includedCharacters = []
class Character {
    constructor(characterData) {
        console.log(characterData)
        let existingSeries;
      this.id = characterData.id;
      this.name = characterData.name;
      this.description = characterData.description;
      this.image_URL = characterData.image_URL;
      this.series_id = characterData.series_id;
      this.series = (existingSeries = includedSeries.find(element => element.id === this.series_id)) ? existingSeries : new Series(characterData.series);
      this.save();
    }
    save() {
        includedCharacters.push(this)
    }
    static get allIncludedCharacters() {
        return includedCharacters;
    }
  }

let includedSeries = []
class Series {
    constructor(seriesData) {
        this.id = seriesData.id
        this.title = seriesData.title;
        this.image_URL = seriesData.image_URL;
        this.save();
    }
    save() {
        includedSeries.push(this);
    }

    static allIncludedSeries() {
        return includedSeries;
    }
}