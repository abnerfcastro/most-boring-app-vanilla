// Change h1 tag textContent
let h1Elem = document.getElementById('greeting-message');

h1Elem.textContent = 'Hello, SA Team!';

let value = 0;

function updateValueText() {
    document.getElementById('value-wrapper').textContent = `${value}`;
}

let incrementBtn = document.getElementById('increment-btn');

incrementBtn.addEventListener('click', () => {
    value += 1;
    updateValueText();
});

function decrementValue() {
    value -= 1;
    updateValueText();
};

// ----

let fetchStarWarsCharactersBtn = document.getElementById('fetch-star-wars-characters');

function setLoading() {
    const wrapperDiv = document.getElementById('star-wars-characters-wrapper');
    wrapperDiv.innerHTML = '<span>Loading...</span>';
}

function renderStarWarsCharactersList(characters) {
    if (Array.isArray(characters) === false) return;
    const listElem = document.createElement('ul');
    for (const { name } of characters) {
        const listItemElem = document.createElement('li');
        listItemElem.textContent = name;
        listElem.appendChild(listItemElem);
    }
    const wrapperDiv = document.getElementById('star-wars-characters-wrapper');
    wrapperDiv.innerHTML = '';
    wrapperDiv.appendChild(listElem);
}

function clearCharactersList() {
    const wrapperDiv = document.getElementById('star-wars-characters-wrapper');
    while (wrapperDiv.firstChild) {
        wrapperDiv.removeChild(wrapperDiv.lastChild);
    }
}

fetchStarWarsCharactersBtn.addEventListener('click', async () => {
    try {
        let data = { next: 'https://swapi.dev/api/people', results: [] }
        let starWarsCharacters = [];
        setLoading();

        while (data.next) {
            const response = await fetch(data.next);
            if (response.ok) {
                data = await response.json();
                starWarsCharacters = [...starWarsCharacters, ...data.results]
            } else {
                alert(`Unable to fetch from SWAPI: ${data.next}`);
                break;
            }
        }       
        renderStarWarsCharactersList(starWarsCharacters);
    } catch (error) {
       console.error(error);
    }
});