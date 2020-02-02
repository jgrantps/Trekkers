// Contains all functions and classes for manipulating Character objects.

class Character {
  constructor(characterData) {
    this.id = characterData.id;
    this.name = characterData.name;
    this.description = characterData.description;
    this.image_URL = characterData.image_URL
  }
}


function retreiveShow(show) {
  var characterSet = show.data.attributes.characters;
  var seriesImage = show.data.attributes.image_URL;

  setSeriesImage(seriesImage);
  retreiveCharacters(characterSet);
}

function setSeriesImage(image) {
  var imageContainer = document.getElementById('series-image')
  imageContainer.innerHTML = `
  <img src="${image}" alt="Science Fiction Space Craft">
  `
}

function retreiveCharacters(characterSet) {
  var collectionDiv = document.getElementById('character-select');
  collectionDiv.innerHTML = `<option value="default"> Select A Character </option>`
  var characterCollection = [];

  for (element of characterSet) {
    let newCharacter = new Character(element);
    renderCharacterDropDown(newCharacter);
  }
};


function renderCharacterDropDown(character) {
  var collectionDiv = document.getElementById('character-select');

  var newOption = document.createElement('option');
  newOption.setAttribute('value', character.id);
  newOption.innerText = `${character.name}`;
  collectionDiv.insertBefore(newOption, collectionDiv.lastChild);
}

function handleOnCharacterSubmit() {
  const form = document.getElementById('character-selection-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    
    let selectedCharacterId = e.target['character-select'].value;

    fetch(`http://localhost:3000/characters/${selectedCharacterId}`)
      .then(response => response.json())
      .then(character => postCharacter(character));
  });
}


function postCharacter(element) {
  var cName = element.data.attributes.name;
  const nameList = document.getElementById('saved-name-list')
  addCharacterToUser(element)
}

function configuredCharacterParams(character) {
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


// fetch function to turn selected character in the the user's selection.
function addCharacterToUser(character) {
  fetch(`http://localhost:3000/selections`, configuredCharacterParams(character))
      .then(response => response.json())
      .then(resp => updateUserSelectionList(resp.character));
  };


function updateUserSelectionList(input) {
  const nameList = document.getElementById('saved-name-list');
  var newOption = document.createElement('a');
  let newCharacter = new Character(input);
  
  newOption.setAttribute('value', newCharacter.id);
  newOption.setAttribute('class', 'select-character character-btn');
  newOption.innerText = `${newCharacter.name}`;
  setCharacterSheetAccess(newOption, newCharacter);
  nameList.insertBefore(newOption, nameList.lastChild);
}


function setCharacterSheetAccess(newOption, newCharacter) {
  newOption.addEventListener('click', function(e){
    var imageSpot = document.getElementById("character-image") 
    var nameSpot = document.getElementById("character-sheet-name")
    var seriesSpot = document.getElementById("character-sheet-series")
    var descriptionSpot = document.getElementById("character-sheet-description")
    var deleteButton = document.getElementById("character-delete")
    nameSpot.innerText = newCharacter.name;
    deleteButton.setAttribute('value', newCharacter.id)
    imageSpot.setAttribute("src", newCharacter.image_URL);
    // seriesSpot.innerText = "enter the series here"
    descriptionSpot.innerHTML = newCharacter.description;
  })
}

function handleOnSelectionDelete() {
  var deleteButton = document.getElementById("character-delete");
  deleteButton.addEventListener('click', function(){
    var selectionId = deleteButton.getAttribute('value');
    console.log(selectionId)
    fetch(`http://localhost:3000/selections/${selectionId}`, configuredDeleteSelectionParams())
      .then(response => response.json())
      .then(resp => console.log(resp));
  });
}

function configuredDeleteSelectionParams() {
  var deletionPackage = {USER}
  
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
