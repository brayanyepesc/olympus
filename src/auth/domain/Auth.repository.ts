export interface AuthRepository {
    signInWithGoogle(): Promise<void>;
    signOut(): Promise<void>;
}