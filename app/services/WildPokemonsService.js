import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeApi } from "./AxiosService.js"

class WildPokemonsService {
  async setActivePokemon(pokemonName) {
    const response = await pokeApi.get(pokemonName)
    console.log('OBTAINED 1 POKEMON:', response.data);
    const newPokemon = new Pokemon(response.data)
    AppState.activePokemon = newPokemon
  }

  async getPokemonData() {
    const response = await pokeApi.get()
    console.log('SERVICE response', response.data);
    AppState.wildPokemon = response.data.results
  }
}

export const wildpokemonService = new WildPokemonsService()