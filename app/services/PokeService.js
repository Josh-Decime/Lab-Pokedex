import { AppState } from "../AppState.js";
import { baseURL } from "../env.js";
import { Pokemon } from "../models/PokeModel.js";
import { pokeApi } from "./AxiosService.js";


class PokeService {
    async getApiPokemon() {
        const response = await pokeApi.get()
        console.log('🐈‍⬛📡', response)
    }
}

export const pokeService = new PokeService()