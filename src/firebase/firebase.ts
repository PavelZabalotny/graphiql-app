import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import { firebaseConfig } from '@/firebase/firebaseConfig.ts'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const googleProvider = new GoogleAuthProvider()
const signInWithGoogle = async (): Promise<void> => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    const q = query(collection(db, 'users'), where('uid', '==', user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      })
    }
  } catch (err) {
    if (err instanceof Error) {
      alert(err.message)
    }
  }
}

const logInWithEmailAndPassword = async (email: string, password: string): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    if (err instanceof Error) {
      alert(err.message)
    }
  }
}

const registerWithEmailAndPassword = async (name: string, email: string, password: string): Promise<void> => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    })
  } catch (err) {
    if (err instanceof Error) {
      alert(err.message)
    }
  }
}

const logout = (): void => {
  void signOut(auth)
}

export { auth, db, signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPassword, logout }
