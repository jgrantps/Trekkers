// Contains all functions and classes for manipulating Character objects.

class Character {
  constructor(characterData) {
    this.id = characterData.id;
    this.name = characterData.name;
    this.description = characterData.description;
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
    // console.log(selectedCharacterId);

    fetch(`http://localhost:3000/characters/${selectedCharacterId}`)
      .then(response => response.json())
      .then(character => postCharacter(character));
  });
}


function postCharacter(element) {
  var cName = element.data.attributes.name;
  const nameList = document.getElementById('saved-name-list')
  console.log(nameList)
}