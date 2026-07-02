import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const requiredConfigKeys = [
  "apiKey",
  "authDomain",
  "projectId",
  "storageBucket",
  "messagingSenderId",
  "appId",
];

const hasFirebaseConfig = requiredConfigKeys.every((key) => Boolean(firebaseConfig[key]));

function getFirebaseApp() {
  if (!hasFirebaseConfig) {
    return null;
  }

  if (getApps().length > 0) return getApps()[0];
  return initializeApp(firebaseConfig);
}

const app = getFirebaseApp();
export const db = app ? getFirestore(app) : null;
export const isFirebaseConfigured = hasFirebaseConfig;

export function getFirebaseSetupErrorMessage() {
  if (!hasFirebaseConfig) {
    return "Firebase is not configured yet. Add your VITE_FIREBASE_* values to .env.local before submitting the form.";
  }

  return "Firebase is not ready yet. Make sure the Firestore database is enabled in Firebase Console and the project is using the correct credentials.";
}

