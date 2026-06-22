async function randomPokemon(fetchPokemonAPI, pokemonAPI) {
    try {
        // generate random pokemon ID
        const randomPokemonID = Math.floor(Math.random() * 1010) + 1;
        const data = await fetchPokemonAPI(randomPokemonID);

        if(!data) {
            return; //sends a value out of a function and immediately stops the function.
        } else{ 
            console.log("\n--- Random Pokémon ---");
            console.log("Name:", data.name);
            console.log("ID:", data.id);
            console.log("Height:", data.height);
            console.log("Weight:", data.weight);
            console.log("----------------------\n");
        }
        pokemonAPI.push(data.name);
    } catch(error) {
        console.log("Error generate the pokemon", error);
    }
}

module.exports = randomPokemon;