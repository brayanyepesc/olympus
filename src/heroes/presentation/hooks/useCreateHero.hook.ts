import { useToast } from "vue-toastification";
import { heroesUseCases } from "../../infreaestructure/dependencies";
import { HeroesFormValues } from "../../domain/Heroes.entity";

export const useCreateHero = () => {
    const toast = useToast();
    const createHero = async (hero: HeroesFormValues) => {
        try {
            await heroesUseCases.createHero(hero);
            toast.success("Hero created successfully");
        } catch (error) {
            toast.error("Error creating hero");
        }
    }
    return { createHero };
}