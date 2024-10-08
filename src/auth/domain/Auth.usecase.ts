import { AuthRepository } from "./Auth.repository";

export class AuthUseCases {
    constructor(readonly authRepository: AuthRepository){}
    async signInWithGoogle(): Promise<void> {
        return this.authRepository.signInWithGoogle();
    }
    async signOut(): Promise<void> {
        return this.authRepository.signOut();
    }
}