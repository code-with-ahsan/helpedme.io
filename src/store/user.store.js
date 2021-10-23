import create from "zustand";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const useUserStore = create((set) => ({
  user: null,
  logOut: async () => {
    const auth = getAuth();
    await auth.signOut();
    set({ user: null });
  },
  isLoggedIn: () => {
    const auth = getAuth();
    return auth.currentUser !== null;
  },
  loadUser: () => {
    const auth = getAuth();
    set({ user: auth.currentUser });
  },
  login: async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info.
      const user = result.user;
      set({ user });
    } catch (error) {
      set({ user: null });
    }
  },
}));

export default useUserStore;
