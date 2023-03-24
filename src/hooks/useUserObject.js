import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';

export const useUserObject = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await new Promise(resolve => {
          // Wait for auth state to be loaded
          const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
            resolve(user);
          });
          return unsubscribe;
        });

        if (auth.currentUser) {
          const q = query(collection(db, 'users'), where('uid', '==', auth.currentUser.uid));
          const doc = await getDocs(q);
          const data = doc.docs[0].data();
          setUser(prevUser => ({ ...prevUser, name: data.name }));
        }
      } catch (err) {
        console.error(err);
        alert('An error occurred while fetching user data');
      }
    };

    fetchUserData();
  }, []);

  return { user, name: user?.name };
};
