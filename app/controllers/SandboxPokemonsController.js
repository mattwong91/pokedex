import { AppState } from "../AppState.js";
import { sandboxPokemonsService } from "../services/SandboxPokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawCaughtPokemon() {
  const myPokemon = AppState.myPokemon
  let content = ''
  myPokemon.forEach(pokemon => content += pokemon.caughtTemplate)
  setHTML('caughtPokemon', content)
}

export class SandboxPokemonsController {
  constructor() {
    AppState.on('account', this.getCaughtPokemon)
    AppState.on('myPokemon', _drawCaughtPokemon)
  }

  async catchPokemon() {
    try {
      await sandboxPokemonsService.catchPokemon()
    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
  }

  async getCaughtPokemon() {
    try {
      await sandboxPokemonsService.getCaughtPokemon()
    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
  }
}