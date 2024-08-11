import { firestore } from './firebase';

export default {
    users: [],

    async addUser(user) {

        this.users.push(user);

        try {

            const userRef = firestore.collection('users').doc(user.id);
            await userRef.set(user);
        } catch (error) {
            console.error('Error adding user to Firestore:', error);
        }
    },

    async getUserById(id) {

        let user = this.users.find(user => user.id === id);

        if (!user) {
            try {

                const userDoc = await firestore.collection('users').doc(id).get();
                if (userDoc.exists) {
                    user = userDoc.data();
                    this.users.push(user);
                }
            } catch (error) {
                console.error('Error fetching user from Firestore:', error);
            }
        }

        return user;
    },
};
