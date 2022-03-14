const pokemonList = document.querySelectorAll('.pokedex-list-pokemon')
const pokemonCard = document.querySelectorAll('.pokecard-pokemon')

pokemonList.forEach(pokemon =>{
    pokemon.addEventListener("click", () => {
        // remove a class (card)
        const pokemonCardOpenRemove = document.querySelector(".open")
        pokemonCardOpenRemove.classList.remove('open')

        // obter o id de localização
        const pokemonID = pokemon.attributes.id.value

        // adiciona a class (card)
        const pokemonCardOpenAdd = document.querySelector('#card-' + pokemonID)
        pokemonCardOpenAdd.classList.add('open')


        // remove a class (list)
        const pokemonListActiveRemove = document.querySelector('.active')
        pokemonListActiveRemove.classList.remove('active')

        // add a class (list)
        const pokemonListActiveAdd = document.getElementById(pokemonID)
        pokemonListActiveAdd.classList.add('active')
    })
})