

class User {
    constructor(input) {
        this.id = input.id
        this.name = input.attributes.name
        
            }       
        
    
    get characters() {
       return Character.allIncludedCharacters;
    
    }

    get selections() {
        return Selection.allIncludedSelections;
    }
}

// var buildNestedSelections = function(input) 



let includedSelections = [];
class Selection {
    constructor(input) {
        this.id = input.id;
        this.user_id = input.user_id;
        this.character_id = input.character_id;
        this.character = new Character(input.character)
        this.user = USER  
        // ^^ USER is a global variable and is USER = new User(input.data)   
        this.save();
    }     
    save() {
        includedSelections.push(this);
    }    

    static get allIncludedSelections() {
        return includedSelections;
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