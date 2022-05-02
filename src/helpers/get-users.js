import { getDocs, collection, orderBy, limit, query } from "firebase/firestore";
import { users } from "../stores/users";
import { db } from "../firebase-config";

export const getUsers = async () => {
  try {
    const q = query(
      collection(db, "users"),
      orderBy("date", "desc"),
      limit(10)
    );
    const querySnapshot = await getDocs(q);

    const usersArray = querySnapshot.docs.map((doc) => {
      const { name, email, image } = doc.data();
      return {
        id: doc.id,
        /* if the name is very long we cut it and we only bring 17 characters plus "..."
        Example Rhoshandiatellyneshiaunneveshenk Koyaanisquatsiuth Williams
         ="Rhoshandiatellyne..." */
        name: name.length > 40 ? name.slice(0, 17) + "..." : name,
        email,
        image,
      };
    });


    users.set(usersArray);
  } catch (error) {
    console.log(error);
  }
};
