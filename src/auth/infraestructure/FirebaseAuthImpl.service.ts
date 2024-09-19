import { signInWithPopup } from "firebase/auth";
import { firebaseAuth, GoogleAuthProvider } from "../../firebase/firebase";
import { AuthRepository } from "../domain/Auth.repository";

export class FirebaseAuthRepository implements AuthRepository {
    constructor(readonly auth = firebaseAuth) {}
    async signInWithGoogle(): Promise<any> {
        const provider = new GoogleAuthProvider();
        try {
            const userCredential = await signInWithPopup(this.auth, provider);
            return userCredential.user;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}
