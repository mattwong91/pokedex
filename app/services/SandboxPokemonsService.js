import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class SandboxPokemonsService {
  async getCaughtPokemon() {
    const response = await api.get('api/pokemon')
    console.log('SANDBOX SERVICE, getCaughtPokemon, response data:', response.data);
    AppState.myPokemon = response.data
  }
  async catchPokemon() {
    const response = await api.post('api/pokemon', AppState.activePokemon)
    console.log('sandbox service response.data:', response.data);
  }
}

export const sandboxPokemonsService = new SandboxPokemonsService()