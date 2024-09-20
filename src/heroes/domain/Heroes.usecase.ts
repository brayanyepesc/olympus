import { Hero, HeroesFormValues } from "./Heroes.entity";
import { HeroesRepository } from "./Heroes.repository";

export class HeroesUseCases {
    constructor(readonly heroRepository: HeroesRepository){}
    async getHeroes(): Promise<Hero[]> {
        return await this.heroRepository.getHeroes();
    }
    async createHero(hero: HeroesFormValues): Promise<void> {
        return await this.heroRepository.createHero(hero);
    }
    async getHeroById(id: string): Promise<Hero> {
        return await this.heroRepository.getHeroById(id);
    }
}