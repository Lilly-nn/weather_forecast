import { doc, setDoc } from "firebase/firestore";
import { db } from "../services/firebase.config";

export async function addToFirestore(tripName, trip, userId) {
    await setDoc(doc(db, "users", userId, "trips", tripName), trip)
}