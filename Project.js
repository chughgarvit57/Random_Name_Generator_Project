const name1 = document.getElementById("name")
const gender = document.getElementById("gender")
const height = document.getElementById("height")

const randomBtn = document.querySelector(".getRandomCharacter");
randomBtn.addEventListener('click',(e) => {
    e.preventDefault();
    name1.innerHTML = '<em>Loading...</em>';
    gender.innerHTML = '<em>Loading...</em>';
    height.innerHTML = '<em>Loading...</em>';
    const randomNumber = Math.ceil(Math.random()*83);
    fetch(`https://swapi.dev/api/people/${randomNumber}`)
        .then(response => response.json())
        .then(character => {
            name1.innerHTML = character.name;
            gender.innerHTML = character.gender;
            height.innerHTML = character.height;
        })
})