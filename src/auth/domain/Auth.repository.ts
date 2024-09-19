export interface AuthRepository {
    signInWithGoogle(): Promise<void>;
}