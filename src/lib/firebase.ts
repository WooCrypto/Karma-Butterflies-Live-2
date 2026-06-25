import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, collection, query, getDocs, limit, orderBy, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase dynamically from the provisioned config
const app = initializeApp(firebaseConfig);

// Initialize Firestore with the custom databaseId (Critical: required for non-default databases)
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Validate Connection to Firestore on boot
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}
testConnection();

// Types
export interface WalletProfile {
  address: string;
  connectedAt: string;
  lastSeen: string;
  verifiedNfts: string[];
  detectedAlignment: string;
  detectedSeed: string;
  isEvolved: boolean;
  selectedBadge: string;
  customOverlayImg?: string; // base64 or reference
  customOverlayName?: string;
  isCustomApplied?: boolean;
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Save or update wallet connection and profile
export async function saveWalletProfile(address: string, profile: Partial<WalletProfile>) {
  if (!address) return;
  const cleanedAddress = address.trim();
  const docRef = doc(db, 'wallets', cleanedAddress);
  const path = `wallets/${cleanedAddress}`;
  
  try {
    let existingDoc;
    try {
      existingDoc = await getDoc(docRef);
    } catch (err) {
      handleFirestoreError(err, OperationType.GET, path);
    }

    const now = new Date().toISOString();
    
    if (existingDoc && existingDoc.exists()) {
      try {
        await setDoc(docRef, {
          ...existingDoc.data(),
          ...profile,
          lastSeen: now
        }, { merge: true });
      } catch (err) {
        handleFirestoreError(err, OperationType.WRITE, path);
      }
    } else {
      try {
        await setDoc(docRef, {
          address: cleanedAddress,
          connectedAt: now,
          lastSeen: now,
          verifiedNfts: profile.verifiedNfts || [],
          detectedAlignment: profile.detectedAlignment || 'light',
          detectedSeed: profile.detectedSeed || 'karma-social-layer',
          isEvolved: profile.isEvolved || false,
          selectedBadge: profile.selectedBadge || 'none',
          customOverlayImg: profile.customOverlayImg || '',
          customOverlayName: profile.customOverlayName || '',
          isCustomApplied: profile.isCustomApplied || false
        });
      } catch (err) {
        handleFirestoreError(err, OperationType.WRITE, path);
      }
    }
  } catch (err) {
    console.error('Error saving wallet profile to Firestore:', err);
  }
}

// Get wallet profile
export async function getWalletProfile(address: string): Promise<WalletProfile | null> {
  if (!address) return null;
  const cleanedAddress = address.trim();
  const docRef = doc(db, 'wallets', cleanedAddress);
  const path = `wallets/${cleanedAddress}`;
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as WalletProfile;
    }
  } catch (err) {
    handleFirestoreError(err, OperationType.GET, path);
  }
  return null;
}

// Get recently connected wallets (for a dynamic "live activity" feed)
export async function getRecentWallets(maxCount = 5): Promise<WalletProfile[]> {
  const path = 'wallets';
  try {
    const walletsCol = collection(db, path);
    const q = query(walletsCol, orderBy('lastSeen', 'desc'), limit(maxCount));
    const querySnapshot = await getDocs(q);
    const list: WalletProfile[] = [];
    querySnapshot.forEach((doc) => {
      list.push(doc.data() as WalletProfile);
    });
    return list;
  } catch (err) {
    handleFirestoreError(err, OperationType.GET, path);
    return [];
  }
}
