import { Hero, HeroesFormValues } from "./Heroes.entity";

export interface HeroesRepository {
    getHeroes(): Promise<Hero[]>;
    createHero(hero: HeroesFormValues): Promise<void>;
    getHeroById(id: string): Promise<Hero>;
    deleteHero(id: string): Promise<void>;
}