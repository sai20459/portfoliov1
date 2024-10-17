import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const createFirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCaNssll_uJJx6KoEpUhpSK5LcMlj3_Osw",
    authDomain: "websi-be52f.firebaseapp.com",
    projectId: "websi-be52f",
    storageBucket: "websi-be52f.appspot.com",
    messagingSenderId: "255691819679",
    appId: "1:255691819679:web:6d094bba01c03e398cb0aa",
    measurementId: "G-EYQ06EGPPJ",
  };

  //   const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  if (getApps().length <= 0) {
    const app = initializeApp(firebaseConfig);
    // Check that `window` is in scope for the analytics module!
    if (typeof window !== "undefined") {
      // Enable analytics. https://firebase.google.com/docs/analytics/get-started
      if ("measurementId" in firebaseConfig) {
        getAnalytics();
      }
    }
    return app;
  }
};
