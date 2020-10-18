export const state = () => ({
    user: null,
    isLoggedIn: false,
    isLoading: false
});

export const mutations = {
    setUserObject(state, payload) {
        state.user = payload;
    },
    deleteUserObject(state) {
        state.user = null;
    },
    userStatusChanged(state, payload) {
        state.isLoggedIn = payload;
    },
    changeLoadingStatus(state, payload) {
        state.isLoading = payload;
    }
};

export const actions = {
    attemptChangedLoadingStatus({ commit }, payload) {
        commit('changeLoadingStatus', payload);
    },
    attemptLogin({ commit, dispatch }, payload) {
        dispatch('attemptChangedLoadingStatus', true);
        return new Promise((resolve, reject) => {
            this.$auth
                .login(payload.email, payload.password, true)
                .then((response) => {
                    const currentUser = this.$auth.currentUser();

                    if (payload.name) {
                        const userName = {
                            data: {
                                full_name: payload.name
                            }
                        };
                        currentUser.update(userName).then(() => {
                            commit('setUserObject', currentUser);
                            dispatch('setUserLoggedInStatus', true);
                            dispatch('attemptChangedLoadingStatus', false);
                            return resolve(response);
                        });
                    } else {
                        commit('setUserObject', currentUser);
                        dispatch('setUserLoggedInStatus', true);
                        dispatch('attemptChangedLoadingStatus', false);
                        return resolve(response);
                    }
                })
                .catch((error) => reject(error));
        });
    },
    attemptSignUp({ dispatch }, payload) {
        dispatch('attemptChangedLoadingStatus', true);
        return new Promise((resolve, reject) => {
            this.$auth
                .signup(payload.email, payload.password)
                .then((response) => {
                    dispatch('attemptLogin', payload).then((response) =>
                        resolve(response)
                    );
                })
                .catch((error) => reject(error));
        });
    },
    attemptLogout({ commit, dispatch }) {
        dispatch('attemptChangedLoadingStatus', true);
        return new Promise((resolve, reject) => {
            const currentUser = this.$auth.currentUser();

            if (currentUser) {
                currentUser
                    .logout()
                    .then(() => {
                        commit('deleteUserObject');
                        dispatch('setUserLoggedInStatus', false);
                        dispatch('attemptChangedLoadingStatus', false);
                        return resolve();
                    })
                    .catch((error) => reject(error));
            }
        });
    },
    setUserLoggedInStatus({ commit }, payload) {
        commit('userStatusChanged', payload);
    }
};

export const getters = {
    isLoggedIn(state) {
        // eslint-disable-next-line camelcase
        return state.isLoggedIn;
    },
    isLoading(state) {
        return state.isLoading;
    }
};
