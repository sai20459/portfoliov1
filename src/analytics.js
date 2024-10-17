import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const createFirebaseApp = () => {
  const clientCredentials = {
    apiKey: process?.env?.REACT_APP_FIREBASE_API_KEY,
    authDomain: process?.env?.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process?.env?.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process?.env?.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process?.env?.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process?.env?.REACT_APP_FIREBASE_APP_ID,
    measurementId: process?.env?.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

  //   const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  if (getApps().length <= 0) {
    const app = initializeApp(clientCredentials);
    // Check that `window` is in scope for the analytics module!
    if (typeof window !== "undefined") {
      // Enable analytics. https://firebase.google.com/docs/analytics/get-started
      if ("measurementId" in clientCredentials) {
        getAnalytics();
      }
    }
    return app;
  }
};
