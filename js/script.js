let pokemonNome = document.querySelector('.pokemonNome')
let pokemonNumero = document.querySelector('.pokemonNumero')
let pokemonTipo = document.querySelector('.pokemonTipo')
let pokemonImagem = document.querySelector('.pokemon-imagem')
let input = document.querySelector('.search')

let PesquisarPokemon = 1;


const fetchPokemon = async (pokemon) => {
    const APIresposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const dados = await APIresposta.json();

    return dados;
}

const renderPokemon = async (pokemon) => {

    const dados = await fetchPokemon(pokemon);

    pokemonNome.innerHTML = dados.name
    pokemonNumero.innerHTML = dados.id
    pokemonImagem.src = dados['sprites']['other']['official-artwork']['front_default']
    pokemonTipo.innerHTML = dados['types']['0']['type']['name']

  
}

function formSearch() {
    addEventListener('submit', (event) => {
        event.preventDefault();
    });
    
    if  (isNaN(input.value)) {
        
        renderPokemon(input.value.toLowerCase());
        
    } else{
        PesquisarPokemon = input.value;
        renderPokemon(PesquisarPokemon);
    }
};

function btnPrev()  {
    PesquisarPokemon = parseInt(pokemonNumero.innerHTML);
    PesquisarPokemon -= 1;
    renderPokemon(PesquisarPokemon);
};

function btnNext() {
    PesquisarPokemon = parseInt(pokemonNumero.innerHTML);
    PesquisarPokemon += 1;
    renderPokemon(PesquisarPokemon);
};

renderPokemon(PesquisarPokemon);