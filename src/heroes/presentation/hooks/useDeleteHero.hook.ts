import { POSITION, useToast } from "vue-toastification";
import { heroesUseCases } from "../../infreaestructure/dependencies";

export const useDeleteHero = () => {
    const toast = useToast();
    const deleteHero = async (heroId: string) => {
        try {
            await heroesUseCases.deleteHero(heroId);
            toast.success("Hero deleted successfully", {
                position: POSITION.BOTTOM_RIGHT,
            });
        } catch (error) {
            toast.error("Error deleting hero", {
                position: POSITION.BOTTOM_RIGHT,
            });
        }
    }
    return { deleteHero };
}