var elPokemonList = document.querySelector('.pokemon__list');
var elForm = document.querySelector('.pokemon__form');
var elInputFirst = document.querySelector('.form__input--first');
var elInputSecond = document.querySelector('.form__input--second');
var elInputThird = document.querySelector('.form__input--third');
var elInputFourth = document.querySelector('.form__input--fourth');
var elInputFifth = document.querySelector('.form__input--fifth');



function handleFormSubmit(evt){
    evt.preventDefault();


var inputFirstValue = elInputFirst.value.trim();
var inputSecondValue = elInputSecond.value.trim();    
var inputThirdValue = elInputThird.value.trim();
var inputFourthValue = elInputFourth.value.trim();
var inputFifthValue = elInputFifth.value.trim();

elInputFirst.value = null;
elInputSecond.value = null;
elInputThird.value = null;
elInputFourth.value = null;
elInputFifth.value = null;

var newPokemon = ({
    img: inputFirstValue,
    name: inputSecondValue,
    type: inputThirdValue,
    weight: inputFourthValue,
    height: inputFifthValue
})
pokemons.unshift(newPokemon)
console.log(pokemons)
}

elForm.addEventListener('submit', handleFormSubmit);




function renderingPokemon(_pokemons){

    for(var i = 0; i < _pokemons.length; i++){

        // Creating new elements

        var newLi = document.createElement('li');
        var newImg = document.createElement('img');
        var newHeading = document.createElement('h4');
        var newDefaultHeading = document.createElement('h3')
        var newUl = document.createElement('ul');
        var newSpan = document.createElement('span');
        var newSpanAge = document.createElement('span');

        // setting attributes

        newLi.setAttribute('class', 'pokemon__item bg-light mb-3');
        newImg.setAttribute('src', _pokemons[i].img);
        newImg.setAttribute('alt', _pokemons[i].name + ', image');
        newImg.setAttribute('class', 'pokemon__image mx-auto d-block mb-3');
        newImg.setAttribute('width', 157);
        newImg.setAttribute('height', 157);
        newHeading.setAttribute('class', 'pokemon__heading fw-bold text-dark');
        newDefaultHeading.setAttribute('class', 'pokemon-default__heading fw-bold text-dark mt-5')
        newUl.setAttribute('class', 'pokemon__feature');
        newSpan.setAttribute('class', 'pokemon__weight mx-4 ms-0 fw-bold');
        newSpanAge.setAttribute('class', 'pokemin__age ms-2 fw-bold')



for(var j = 0; j < _pokemons[i].type.length; j++){

var newTypeList = document.createElement('li');
newTypeList.setAttribute('class', 'pokemon__type text-dark mb-1')
newTypeList.textContent =( _pokemons[i].type).join(', ')

}


// Assign

newHeading.textContent = _pokemons[i].name;
newSpan.textContent = _pokemons[i].weight;
newDefaultHeading.textContent = 'Pokemons';
newSpanAge.textContent = _pokemons[i].height;

// Appending

newLi.appendChild(newImg);
newLi.appendChild(newDefaultHeading);
newLi.appendChild(newHeading);
newLi.appendChild(newUl);
newLi.appendChild(newTypeList)
newLi.appendChild(newSpan);
newLi.appendChild(newSpanAge)
elPokemonList.appendChild(newLi)
    }

    
}


renderingPokemon(pokemons)