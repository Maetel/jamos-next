import FirebaseApp from "./firebase";
import { getStorage } from "firebase/storage";

const storage = getStorage(FirebaseApp);
export default storage;
