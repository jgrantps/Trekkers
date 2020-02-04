// Contains all functions for manipulating Character objects.


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

  for (element of characterSet) {
    let foundCharacter;
    let newCharacter = (foundCharacter = USER.characters.find(character => character.id == element.id)) ? foundCharacter : new Character(element);
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
    const characterFetch = api.get(`/characters/${selectedCharacterId}`)
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
    const characterSet = api.post(`/selections`, configuredCharacterParams(character))
    .then(resp => updateUserSelectionList(resp));
  };


function updateUserSelectionList(input) {
  console.log(input)
  const nameList = document.getElementById('saved-name-list');
  var newOption = document.createElement('a');
  let newSelection;

  if (input.character_id === undefined) {
    newSelection = new Selection(input.selection);
    console.log(newSelection)
  }else{
    newSelection = input;
  }

  let newCharacter = newSelection.character;
  
  
  newFunction();

  function newFunction() {
    newOption.setAttribute('character_id', newSelection.character_id);
    newOption.setAttribute('selection_id', newSelection.id);
    newOption.setAttribute('class', 'select-character character-btn');
    newOption.innerText = `${newCharacter.name}`;
    setCharacterSheetAccess(newOption, newCharacter);
    nameList.insertBefore(newOption, nameList.lastChild);
  }
}


function setCharacterSheetAccess(newOption, newCharacter) {
  newOption.addEventListener('click', function(e){
    var imageSpot = document.getElementById("character-image") 
    var nameSpot = document.getElementById("character-sheet-name")
    var seriesSpot = document.getElementById("character-sheet-series")
    var descriptionSpot = document.getElementById("character-sheet-description")
    var deleteButton = document.getElementById("character-delete")
    nameSpot.innerText = newCharacter.name;
    
    deleteButton.setAttribute('value', parseInt(newOption.getAttribute('selection_id')))
    imageSpot.setAttribute("src", newCharacter.image_URL);
    // seriesSpot.innerText = "enter the series here"
    descriptionSpot.innerHTML = newCharacter.description;
  })
}

function handleOnSelectionDelete() {
  var deleteButton = document.getElementById("character-delete");
  deleteButton.addEventListener('click', function(){
    var selectionId = deleteButton.getAttribute('value');
   
    const deletedSeletion = api.post(`/selections/${selectionId}`,configuredDeleteSelectionParams(selectionId))
    .then(resp => deleteSelection(resp));
  });
}

function configuredDeleteSelectionParams(id) {
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

function deleteSelection(resp) {
  console.log(resp)
  deletedSelection = resp.id;
  var selection = USER.selections.find(element => element.id == deletedSelection);
  selection.delete    
   loadCharactersAndSelections(USER)
}
