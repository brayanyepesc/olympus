import { Hero } from "./Heroes.entity";

export interface HeroesRepository {
    getHeroes(): Promise<Hero[]>;
}