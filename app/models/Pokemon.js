export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName
    this.img = data.img || data.sprites.other['official-artwork'].front_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
  }

  static wildListTemplate(pokemon) {
    return `
    <button onclick="app.WildPokemonsController.setActivePokemon('${pokemon.name}')" class="btn btn-danger text-center m-1">
      ${pokemon.name}
    </button>
    `
  }

  get activeTemplate() {
    return `
    
    <div class="col-12 p-3 card">
    <div>
    <h2>${this.name}</h2>
    <img class="poke-img" src="${this.img}" alt="${this.name}">
    <div class="d-flex justify-content-evenly align-items-center">
    <p>Height: ${this.height}</p>
    <p>Weight: ${this.weight}</p>
    </div>
    <p>Types: ${this.computeTypes}</p>
    <div class="d-flex justify-content-end align-items-center">
    <button onclick="app.SandboxPokemonsController.catchPokemon()" class="btn btn-primary">CATCH</button>
    </div>
    </div>
    </div>
    `
  }

  get caughtTemplate() {
    return `
    <div class="mb-2 card text-center">
      ${this.name}
    </div>
    `
  }

  get computeTypes() {
    let content = ''
    this.types.forEach(type => content += type.type.name + ' ')
    return content
  }
}

// SECTION SANDBOX DATA
// {
//   "name": {
//     "type": "String",
//     "required": true,
//     "maxLength": 100
//   },
//   "nickName": {
//     "type": "String",
//     "maxLength": 100
//   },
//   "img": {
//     "type": "String",
//     "required": true,
//     "maxLength": 500
//   },
//   "weight": {
//     "type": "String",
//     "maxLength": 100
//   },
//   "height": {
//     "type": "String",
//     "maxLength": 100
//   },
//   "types": [
//     {}
//   ],
//   "creatorId": {
//     "type": "ObjectId",
//     "required": true,
//     "ref": "Account"
//   }
// }
// !SECTION SANDBOX DATA