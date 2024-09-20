import { POSITION, useToast } from "vue-toastification";
import { heroesUseCases } from "../../infreaestructure/dependencies";
import { HeroesFormValues } from "../../domain/Heroes.entity";

export const useCreateHero = () => {
    const toast = useToast();
    const createHero = async (hero: HeroesFormValues) => {
        try {
            await heroesUseCases.createHero(hero);
            toast.success("Hero created successfully", {
                position: POSITION.BOTTOM_RIGHT,
            });
        } catch (error) {
            toast.error("Error creating hero", {
                position: POSITION.BOTTOM_RIGHT,
            });
        }
    }
    return { createHero };
}