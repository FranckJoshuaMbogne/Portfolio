/**
 * Firebase is loaded lazily, only when the consultation form is submitted.
 * Fill the VITE_FIREBASE_* values in .env (see .env.example) once your
 * Firebase project exists. Until then, form requests open WhatsApp instead.
 */
import type { FirebaseApp } from "firebase/app";
import type { Firestore } from "firebase/firestore/lite";

const env = (import.meta as ImportMeta & { env: Record<string, string | undefined> }).env ?? {};

export const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY || "",
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: env.VITE_FIREBASE_APP_ID || "",
};

export const firebaseReady = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);

let appPromise: Promise<FirebaseApp> | null = null;

function getApp() {
  if (!appPromise) {
    appPromise = import("firebase/app").then(({ initializeApp, getApps }) => (getApps().length ? getApps()[0] : initializeApp(firebaseConfig)));
  }
  return appPromise;
}

export async function getDb(): Promise<Firestore> {
  const [app, { getFirestore }] = await Promise.all([getApp(), import("firebase/firestore/lite")]);
  return getFirestore(app);
}
