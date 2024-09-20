import router from "../../router/router";
import { authUseCases } from "../infraestructure/dependencies";

export const handleLogin = async () => {
    await authUseCases.signInWithGoogle();
}

export const handleLogout = async () => {
    await authUseCases.signOut();
    router.push('/'); 
}