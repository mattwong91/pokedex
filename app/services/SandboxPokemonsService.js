import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js";
import { api } from "./AxiosService.js"

class SandboxPokemonsService {
  async getCaughtPokemon() {
    const response = await api.get('api/pokemon')
    console.log('SANDBOX SERVICE, getCaughtPokemon, response data:', response.data);
    AppState.myPokemon = response.data.map(pokemon => new Pokemon(pokemon))
  }
  async catchPokemon() {
    const response = await api.post('api/pokemon', AppState.activePokemon)
    console.log('sandbox service response.data:', response.data);
    const newPokemon = new Pokemon(response.data)
    AppState.myPokemon.push(newPokemon)
    AppState.emit('myPokemon')
  }
}

export const sandboxPokemonsService = new SandboxPokemonsService()