import axios from "axios";

export const getAllPokemon = async () => {
    const allPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');

    return allPokemon.data.results
}