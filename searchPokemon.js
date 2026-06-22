function searchPokemon(pokemonAPI, data) {
    try {
        if(!data) {
            return;
        } else {
            console.log("\n--- Pokédex ---");
            console.log("Name:", data.name);
            console.log("ID:", data.id);
            console.log("Height:", data.height);
            console.log("Weight:", data.weight);
            console.log("--------------------\n");
        }
        pokemonAPI.push(data.name); //data is added 

    } catch (error) {
        console.log("Error searching for Pokemon", error);
    }
}

module.exports = searchPokemon;