import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { wildpokemonService } from "../services/WildPokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawWildPokemon() {
  const wildPokemon = AppState.wildPokemon
  let content = ''
  wildPokemon.forEach(pokemon => content += Pokemon.wildListTemplate(pokemon))
  setHTML('wildPokemon', content)
}

function _drawActivePokemon() {
  const activePokemon = AppState.activePokemon
  // @ts-ignore
  setHTML('activePokemon', activePokemon.activeTemplate)
}

export class WildPokemonsController {
  constructor() {
    this.getPokemonData()
    AppState.on('wildPokemon', _drawWildPokemon)
    AppState.on('activePokemon', _drawActivePokemon)
  }

  async getPokemonData() {
    try {
      await wildpokemonService.getPokemonData()
      Pop.success('Got Data from pokeApi')
    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
  }

  async setActivePokemon(pokemonName) {
    try {
      await wildpokemonService.setActivePokemon(pokemonName)
    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
  }

}