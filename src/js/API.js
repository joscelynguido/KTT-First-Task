const userAction = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=90');
    const pokemons = await response.json(); 
    for (let index = 0; index < pokemons.results.length; index++) {
        let mainSection = document.getElementById("main");
        let div = document.createElement("div")
        let p = document.createElement("p")
        const pokemon = pokemons.results[index];
        div.setAttribute('class', 'card');
        p.append(pokemon.name);
        div.append(p);
        mainSection.append(div);             
    }
    
}
userAction();