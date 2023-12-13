import { AppState } from "../AppState.js";
import { Pokemon } from "../models/PokeModel.js";
import { pokeService } from "../services/PokeService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class PokeController {
    constructor() {
        console.log('👹🐈‍⬛')
        this.getApiPokemon()
        // AppState.on('apiPokemon', )
    }

    async getApiPokemon() {
        try {
            await pokeService.getApiPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }






}