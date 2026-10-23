/**
 * Firebase is loaded lazily, only when the consultation form is submitted.
 * If saving fails, the consultation form falls back to WhatsApp.
 */
import type { FirebaseApp } from "firebase/app";
import type { Firestore } from "firebase/firestore/lite";

const env = (import.meta as ImportMeta & { env: Record<string, string | undefined> }).env ?? {};

// Firebase web config is public by design; access is controlled by firestore.rules.
// Values in .env override these defaults (project franckjoshua).
export const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY || "AIzaSyAKqNmseCfZUOV59zCFdcrbPdeU-7CtLj4",
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || "franckjoshua-bd301.firebaseapp.com",
  projectId: env.VITE_FIREBASE_PROJECT_ID || "franckjoshua",
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || "franckjoshua.firebasestorage.app",
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1018012114434",
  appId: env.VITE_FIREBASE_APP_ID || "1:1018012114434:web:82bb6efe88940b88b1d11b",
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

export async function getFirebaseAuth() {
  const [app, { getAuth }] = await Promise.all([getApp(), import("firebase/auth")]);
  return getAuth(app);
}
