import axios from "axios";
import { Hero } from "../domain/Heroes.entity";
import { HeroesRepository } from "../domain/Heroes.repository";

export class HeroesService implements HeroesRepository {
    async getHeroes(): Promise<Hero[]> {
        try {
            const response = await axios.get('https://codetest-api.applivery.io/pentathlon/heroes/', {
                headers: {
                    'Authorization': import.meta.env.VITE_AUTHORIZATION_API_KEY
                }
            }) 
            if(response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.log(error);
        }
        return [];
    }
}