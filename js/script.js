const pokemonNome = document.querySelector('.pokemonNome')
const pokemonNumero = document.querySelector('.pokemonNumero')
const pokemonTipo = document.querySelector('.pokemonTipo')
const pokemonImagem = document.querySelector('.pokemon-imagem')
const form = document.querySelector('.form')
const input = document.querySelector('.search')
const botaoVoltar = document.querySelector('.btn-prev')
const botaoPassar = document.querySelector('.btn-next')

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
    pokemonImagem.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    pokemonTipo = dados['types']['0']['type']['name']

  
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    renderPokemon(input.value.toLowerCase());
});

botaoVoltar.addEventListener('click', () => {
    PesquisarPokemon -= 1;
    renderPokemon(PesquisarPokemon);
    
});
botaoPassar.addEventListener('click', () => {
    PesquisarPokemon += 1;
    renderPokemon(PesquisarPokemon);
    
    
});

renderPokemon(PesquisarPokemon);