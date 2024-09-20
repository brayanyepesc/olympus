import { HeroesUseCases } from "../domain/Heroes.usecase";
import { HeroesService } from "./HeroesImpl.service";

const heroesService = new HeroesService();
const heroesUseCases = new HeroesUseCases(heroesService);

export { heroesUseCases };