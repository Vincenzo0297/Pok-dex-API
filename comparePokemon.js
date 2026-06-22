function calculateTotalStats(pokemon) {
    return pokemon.stats.reduce((sum, stat) => {
        return sum + stat.base_stat;
    }, 0);
}

async function comparePokemon(poke1, poke2) {
    try {
        const score1 = calculateTotalStats(poke1);
        const score2 = calculateTotalStats(poke2);

        console.log("\n=============================");
        console.log(`⚔️ ${poke1.name.toUpperCase()} vs ${poke2.name.toUpperCase()}`);
        console.log("=============================");

        console.log(`${poke1.name}: ${score1}`);
        console.log(`${poke2.name}: ${score2}`);

        if (score1 > score2) {
            console.log(`🏆 Winner: ${poke1.name.toUpperCase()}`);
        } else if (score2 > score1) {
            console.log(`🏆 Winner: ${poke2.name.toUpperCase()}`);
        } else {
            console.log("🤝 It's a tie!");
        }

        console.log("=============================\n");

    } catch (error) {
        console.log("Error comparing pokemon", error);
    }
}

module.exports = comparePokemon;