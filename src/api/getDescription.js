import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const collectionRef = collection(db, "description");

export const getDescription = async () => {
	const querySnapshot = await getDocs(collectionRef);
	let items = [];
	querySnapshot.forEach((doc) => items.push(doc.data()));
	return items;
};
