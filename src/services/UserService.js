export default {
    users: [],

    addUser(user) {
        this.users.push(user);
    },

    getUserById(id) {
        return this.users.find(user => user.id === id);
    },


};