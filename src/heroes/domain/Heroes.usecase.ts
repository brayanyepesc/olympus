import { Hero } from "./Heroes.entity";
import { HeroesRepository } from "./Heroes.repository";

export class HeroesUseCases {
    constructor(readonly heroRepository: HeroesRepository){}
    async getHeroes(): Promise<Hero[]> {
        return await this.heroRepository.getHeroes();
    }
}