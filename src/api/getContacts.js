import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const collectionRef = collection(db, "contacts");

export const getContacts = async () => {
	const querySnapshot = await getDocs(collectionRef);
	let items = [];
	querySnapshot.forEach((doc) => items.push(doc.data()));
	return items;
};
