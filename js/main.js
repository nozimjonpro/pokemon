var elPokemonList = document.querySelector('.pokemon__list');
var elForm = document.querySelector('.pokemon__form');
var elInputFirst = document.querySelector('.form__input--first');
var elInputSecond = document.querySelector('.form__input--second');
var elInputThird = document.querySelector('.form__input--third');
var elInputFourth = document.querySelector('.form__input--fourth');
var elInputFifth = document.querySelector('.form__input--fifth');



function addNewPokemon(pokemonImg, pokemonName, pokemonType, pokemonWeight, pokemonHeight, pokemonArr){
    var inputFirstValue = pokemonImg.value.trim();
    var inputSecondValue = pokemonName.value.trim();    
    var inputThirdValue = pokemonType.value.trim();
    var inputFourthValue = pokemonWeight.value.trim();
    var inputFifthValue = pokemonHeight.value.trim();

    var newPokemon = ({
        img: inputFirstValue,
        name: inputSecondValue,
        type: inputThirdValue,
        weight: inputFourthValue,
        height: inputFifthValue
    })

    pokemonArr.unshift(newPokemon)
}


function handleFormSubmit(evt){
    evt.preventDefault();

addNewPokemon(elInputFirst,
    elInputSecond,
    elInputThird,
    elInputFourth,
    elInputFifth,
    pokemons);

    renderingPokemon(pokemons)

elInputSecond.value = null;
elInputThird.value = null;
elInputFourth.value = null;
elInputFifth.value = null;


// pokemons.unshift(newPokemon)
console.log(pokemons)
}

elForm.addEventListener('submit', handleFormSubmit);




function renderingPokemon(_pokemons){
elPokemonList.innerHTML = null;
    for(var i = 0; i < _pokemons.length; i++){

        // Creating new elements

        var newLi = document.createElement('li');
        var newImg = document.createElement('img');
        var newHeading = document.createElement('h4');
        var newDefaultHeading = document.createElement('h3')
        var newUl = document.createElement('div');
        var newSpan = document.createElement('span');
        var newSpanAge = document.createElement('span');

        // setting attributes

        newLi.setAttribute('class', 'pokemon__item bg-light mb-3');
        newImg.setAttribute('src', _pokemons[i].img);
        newImg.setAttribute('alt', _pokemons[i].name + ', image');
        newImg.setAttribute('class', 'pokemon__image mx-auto d-block mb-3');
        newImg.setAttribute('width', 157);
        newImg.setAttribute('height', 157);
        newHeading.setAttribute('class', 'pokemon__heading fw-bold text-dark mb-1');
        newDefaultHeading.setAttribute('class', 'pokemon-default__heading fw-bold text-dark mt-5 mb-1')
        newUl.setAttribute('class', 'pokemon__feature d-flex');
        newSpan.setAttribute('class', 'pokemon__weight mx-4 ms-0 fw-bold');
        newSpanAge.setAttribute('class', 'pokemin__age ms-2 fw-bold')



for(var j = 0; j < _pokemons[i].type.length; j++){

var newTypeList = document.createElement('p');
newTypeList.setAttribute('class', 'pokemon__type text-dark m-0')
newTypeList.textContent =_pokemons[i].type[j]
newUl.appendChild(newTypeList)

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