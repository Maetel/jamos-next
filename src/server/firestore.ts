import FirebaseApp from "./firebase";
import { getFirestore } from "firebase/firestore";

const firestore = getFirestore(FirebaseApp);
export default firestore;
