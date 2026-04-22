import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, collection, addDoc, serverTimestamp, query, where, orderBy, onSnapshot, getDocFromServer, doc } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);

console.log("Initializing Firestore with Database ID:", firebaseConfig.firestoreDatabaseId || '(default)');

// Use initializeFirestore with settings for environment stability
// In some environments, force long polling is required.
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
}, firebaseConfig.firestoreDatabaseId || '(default)');

export const auth = getAuth(app);

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: any[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Test connection with a timeout to prevent silent hangs
async function testConnection() {
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error("Firestore connection timed out")), 15000)
  );

  try {
    // Try to reach the server to verify the config and network
    await Promise.race([
      getDocFromServer(doc(db, '_connection_test_', 'test')),
      timeoutPromise
    ]);
    console.log("Firestore connected successfully.");
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('offline') || error.message.includes('timed out')) {
        console.error("Firestore connection failed: The backend could not be reached. This may be due to a poor connection or missing backend resources.");
      } else {
        console.error("Firestore connection error:", error.message);
      }
    }
  }
}
testConnection();
