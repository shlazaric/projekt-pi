import { createStore } from 'vuex';

export default createStore({
    state: {
        likedBooks: [],
    },
    mutations: {
        TOGGLE_LIKE(state, book) {
            const index = state.likedBooks.findIndex(b => b.id === book.id);
            if (index === -1) {
                state.likedBooks.push(book);
            } else {
                state.likedBooks.splice(index, 1);
            }
        },
    },
    actions: {
        toggleLike({ commit }, book) {
            commit('TOGGLE_LIKE', book);
        },
    },
    getters: {
        likedBooks: state => state.likedBooks,
    },
});
