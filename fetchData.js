// It takes a "name" parameter so we can search for any Pokémon dynamically
async function fetchData(name) {
    try {
        // Send request to the PokéAPI using the provided Pokémon name
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        // Check if the request was successful (status 200–299)
        if (!response.ok) {
            console.log("No Pokemon is found");
            return;
        } else {
            // Convert the API response (JSON string) into a JavaScript object
            const data = await response.json();
            // Return the parsed data so other files (like CLI) can use it
            return data;
        }

    } catch (error) {
        console.log("Error fetching pokemon data:", error);
    }
}

module.exports = fetchData;