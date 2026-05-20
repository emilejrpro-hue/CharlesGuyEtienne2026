import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export let db: any = null;
export let auth: any = null;

const initializeFirebase = async () => {
  try {
    // @ts-ignore
    const config = await import('../../firebase-applet-config.json');
    if (config.apiKey || config.default?.apiKey) {
      const app = initializeApp(config.default || config);
      db = getFirestore(app);
      auth = getAuth(app);
    }
  } catch (e) {
    console.warn("Firebase config not found or invalid. Please complete Firebase setup.");
  }
};

// Initialize but don't block
initializeFirebase();

export { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot };
