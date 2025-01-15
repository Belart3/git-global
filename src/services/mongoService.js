// services/mongoService.js
import * as Realm from "realm-web";

// Initialize Realm App with your App ID
const app = new Realm.App({ id: 'data-pqvpuph' });

export async function loginEmailPassword(email, password) {
  try {
    const credentials = Realm.Credentials.emailPassword(email, password);
    const user = await app.logIn(credentials);
    console.assert(user.id === app.currentUser.id);
    return user;
  } catch (error) {
    console.error("Failed to log in", error);
    throw error;
  }
}
