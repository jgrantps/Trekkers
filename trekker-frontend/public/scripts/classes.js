

class User {
    constructor(input) {
        this.id = input.data.id
        this.name = input.data.attributes.name
        
            }       
    get characters() {
       return Character.allIncludedCharacters;
    }

    get selections() {
       var selectionSet = input.data.attributes.selections
       includedSelections = []
       for (element in selectionSet) {
           selection = new Selection(element)
           includedSelections.push(selection)
       } 
       return includedSelections;
    }

    filterCharacterByName(i) {
        return this.characters.filter(element => element.name === i)
    }
    filterSelectionByCharacterName(i) {
        return this.selections.filter(element => element.character.name === i);
    }
    refreshSelectionList() {
        const nameList = document.getElementById('saved-name-list');
        while (nameList.firstChild) {
            nameList.removeChild(namelist.firstChild);
        }
        //^^ delete all items in the list for full restart.


        var newOption = document.createElement('a');

        newOption.setAttribute('character_id', newSelection.character_id);
        newOption.setAttribute('selection_id', newSelection.id);
        newOption.setAttribute('class', 'select-character character-btn');
        newOption.innerText = `${newCharacter.name}`;
        setCharacterSheetAccess(newOption, newCharacter);
        nameList.insertBefore(newOption, nameList.lastChild);


    }
}
 
let includedSelections = [];
class Selection {
    constructor(input) {
        this.id = input.id;
        this.user_id = input.user_id;
        this.character_id = input.character_id;
       
        this.character = (USER.characters.find(element => element.id === this.character_id)) ? (USER.characters.find(element => element.id === this.character_id)) : new Character(input.character)
        this.user = USER  
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
    }    
}    


let includedCharacters = []
class Character {
    constructor(characterData) {
      this.id = characterData.id;
      this.name = characterData.name;
      this.description = characterData.description;
      this.image_URL = characterData.image_URL;
      this.series_id = characterData.series_id;
      this.series = includedSeries.find( element => element.id === this.series_id );
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