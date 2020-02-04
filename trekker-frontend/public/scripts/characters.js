// Contains all functions for manipulating Character objects.

function selectSeriesOnSubmit() {
  var seriesButtons = document.getElementsByClassName("series-btn");

  for (let element of seriesButtons) {
    element.addEventListener("click", function () {
      var activeButtons = document.getElementsByClassName("series-btn-active")

      for (let activeButton of activeButtons) {
        activeButton.setAttribute("class", "series-btn");
      }
      //^^ resets previously selected button style to non-active //
      element.setAttribute("class", "series-btn-active");
      //^^ sets clicked button styl to 'active' //

      let buttonValue = this.getAttribute('value')
      
      const seriesSet = api.get(`/series/${buttonValue}`)
      .then(series => retreiveShow(series));

    });
  };
};

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

    let newCharacter = checkFor.character(element)
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
      .then(character => addCharacterToUser(character));
  });
}


// fetch function to turn selected character in the the user's selection.
function addCharacterToUser(character) {
    const characterSet = api.post(`/selections`, config.addCharacter(character))
    .then(resp => refreshPage(resp));
  };



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
    seriesSpot.innerText = newCharacter.series.title;
    descriptionSpot.innerHTML = newCharacter.description;
  })
}

function handleOnSelectionDelete() {
  const deleteButton = document.getElementById("character-delete");
  deleteButton.addEventListener('click', function(){
    var selectionId = deleteButton.getAttribute('value');
    const sendDeleteRequest = api.post(`/selections/${selectionId}`, config.deleteSelection(selectionId))
    .then(resp => refreshPage(resp));
  });
}

function refreshPage(input) {
USER = new User(input)
USER.refreshUserDashboard
}