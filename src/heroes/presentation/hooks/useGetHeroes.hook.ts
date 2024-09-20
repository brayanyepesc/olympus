import { POSITION, useToast } from "vue-toastification";
import { heroesUseCases } from "../../infreaestructure/dependencies";
import { ref } from "vue";

export const useGetHeroes = () => {
    const toast = useToast();
    const isLoading = ref(false);
    const getHeroes = async () => {
        isLoading.value = true;
        try {
            return await heroesUseCases.getHeroes();
        } catch (error) {
            toast.error("Error getting heroes", {
                position: POSITION.BOTTOM_RIGHT,
            });
        } finally {
            isLoading.value = false;
        }
    }
    return { isLoading, getHeroes };
}