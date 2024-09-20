import { POSITION, useToast } from "vue-toastification";
import { heroesUseCases } from "../../infreaestructure/dependencies";
import { ref } from "vue";

export const useGetHeroById = () => {
    const toast = useToast();
    const isLoading = ref(false);
    const getHeroById = async (heroId: string) => {
        isLoading.value = true;
        try {
            return await heroesUseCases.getHeroById(heroId);
        } catch (error) {
            toast.error("Error getting heroes", {
                position: POSITION.BOTTOM_RIGHT,
            });
        } finally {
            isLoading.value = false;
        }
    }
    return { isLoading, getHeroById };
}