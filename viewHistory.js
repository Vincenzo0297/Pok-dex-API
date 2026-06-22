function viewHistory(pokemonAPI) {
    try {
        if(pokemonAPI.length === 0) {
            console.log("No Pokemon history yet");
            return;
        } else {   
            console.log("\n--- Search past Pokemon History ---");
            pokemonAPI.forEach((pokemonHistory, Index) => {
                console.log(`${Index + 1}. ${pokemonHistory}`);
            });
            console.log("----------------------\n");
        }
    } catch (error) {
        console.log("Error viewing pokemon history", error);
    }
}

module.exports = viewHistory;
