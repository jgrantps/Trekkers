


class Selection {
    constructor(input) {
        console.log(input);
        this.id = input.id;
        this.user_id = input.user_id;
        this.character_id = input.character_id;
        this.character = new Character(input.character)
        console.log(input.character);
        
    }
    // Character() {
    //     console.log(this)
    //     this.id = this.characterData.id;
    //     this.name = this.characterData.name;
    //     this.description = this.characterData.description;
    //     this.image_URL = this.characterData.URL;
    // }
}


Selection.prototype.user = USER;