const fetchPokemonAPI = require("./fetchData");
const searchPokemon = require("./searchPokemon");
const viewHistory = require("./viewHistory");
const randomPokemon = require("./randomPokemon");

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

function menu() {
    console.log("\n=============================");
    console.log("Pokédex");
    console.log("=============================");
    console.log("1. Search for Pokemon");
    console.log("2. View Pokemon history");
    console.log("3. Random Pokemon");
    console.log("4. Compare Pokemon");
    console.log("5. Exit");
    console.log("=============================");
}

async function main() {
    let selection;
    let pokemonAPI = [];

    try {
        do {
            menu();
            
            selection = await ask("Choose an option: ");

            switch (selection) {
                case "1":
                    const name = await ask("Enter Pokemon name: ");
                    const data = await fetchPokemonAPI(name.toLowerCase());
                    searchPokemon(pokemonAPI, data);
                    break;
                case "2":
                    viewHistory(pokemonAPI);
                    break;
                case "3":
                   await randomPokemon(fetchPokemonAPI, pokemonAPI); // Pass fetchPokemonAPI (function to get Pokémon data from API)
                    break;
                case "4":
                    break;
                case "5":
                    console.log("Bye 👋");
                    rl.close();
                    process.exit(0);
                    break;
                default:
                    console.log("Invalid choice");
            }
        } while (selection !== "6");
    } catch (error) {
        console.log("Error:", error);
    }
}

main();