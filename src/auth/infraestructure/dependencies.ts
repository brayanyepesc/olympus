import { AuthUseCases } from "../domain/Auth.usecase";
import { FirebaseAuthRepository } from "./FirebaseAuthImpl.service";

const firebaseAuthRepository = new FirebaseAuthRepository();
const authUseCases = new AuthUseCases(firebaseAuthRepository);

export { authUseCases };