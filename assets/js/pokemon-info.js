const id = new URL(window.location.href).searchParams.get("id");
const pokemonStats = document.getElementById("stats");

function statsPokemon(id) {
  pokeApi.getPokemonStats(id).then((pokemon) => {
    const newHtml = `
    <section id="stats" class="statsContainer ${pokemon.type}">
    <header class="title">
        <a href="/index.html">
            <img src="assets/images/arrow_back.png" alt="arrow-left-white" class="backButton">
        </a>
        <img src="https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-28.jpg"
            alt="pokeball" class="pokeball">
        <h1 class="pokemonName">${pokemon.name}</h1>
        <p class="pokemonId">#${pokemon.number}</p>
    </header>
    <section class="pokemonPhoto">
        <img src="${pokemon.photo}" alt="bulbassaur" class="pokemon">
    </section>
    <section class="pokemonInfo">
        <div class="types">
            <ol class="types">
                ${pokemon.types
                  .map((type) => `<li class="type ${type}">${type}</li>`)
                  .join("")}
            </ol>
        </div>
        <h2 class="aboutTitle">Sobre</h2>
        <section class="about">
            <div class="basicInfo">
                <div class="card">
                    <img src="assets/images/weight.png" alt="weight" class="imageCard">
                    <p class="value">${pokemon.weight}lbs</p>
                </div>
                <p class="text">Peso</p>
            </div>
            <div class="divider"></div>
            <div class="basicInfo">
                <div class="card">
                    <img src="assets/images/straighten.png" alt="ruler" class="imageCard">
                    <p class="value">${pokemon.height}ft</p>
                </div>
                <p class="text">Altura</p>
            </div>
            <div class="divider"></div>
            <div class="basicInfo">
                <div class="card">
                    <p class="text">${pokemon.exp}</p>
                </div>
                <p class="text">Base Exp</p>
        </section>
        </div>
        <div class="abitiliesCard">
            <h2 class="titleSection">Habilidades</h2>
            <ol class="abilities" style="margin-top:1rem;">
                <p>${pokemon.abilities
                  .map(
                    (ability) => `
                <p ${ability}">${ability}</p>`
                  )
                  .join("")}</p>
            </ol>
        </div>
        <div class="containerStats">
        <div class="statusContainer">
            <h2 class="titleSection statsTitle">Status Base</h2>
            <section class="baseStats">
                <div>
                    <p class="baseStatsName">HP</p>
                    <p class="baseStatsName">Attack</p>
                    <p class="baseStatsName">Defense</p>
                    <p class="baseStatsName">SPA</p>
                    <p class="baseStatsName">SPD</p>
                    <p class="baseStatsName">Speed</p>
                </div>
            </section>
            <section class="baseStats">
                <div>
                    <p class="baseStatsValue">${pokemon.stats
                        .map(
                        (stats) => `
                    <p class="baseStatsValue">${stats}</p>`
                    )
                    .join("")}</p>
                </div>
            </section>
        </div>
        <div class="movesContainer">
            <h2 class="titleSection statsTitle">Moves</h2>
            <section class="moves">
                <div>
                    <p class="movesText">${pokemon.moves[0]}</p>
                    <p class="movesText">${pokemon.moves[1]}</p>
                    <p class="movesText">${pokemon.moves[2]}</p>
                    <p class="movesText">${pokemon.moves[3]}</p>
                </div>
            </section>
        </div>
    </div>
    </section>
</section>
			`;

    pokemonStats.innerHTML = newHtml;
  });
}

statsPokemon(id);
