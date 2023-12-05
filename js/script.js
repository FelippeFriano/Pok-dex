const pokemonNome = document.querySelector('.pokemonNome')
const pokemonNumero = document.querySelector('.pokemonNumero')
const pokemonTipo = document.querySelector('.pokemonTipo')
const pokemonImagem = document.querySelector('.pokemon-imagem')


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

renderPokemon('')