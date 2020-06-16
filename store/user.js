export const state = () => ({
    showCookieBanner: false
});

export const mutations = {
    userAcceptCookies(state) {
        state.showCookieBanner = true;
    }
};

export const actions = {
    userAcceptCookies({ commit }) {
        commit('userAcceptCookies');
    }
};

export const getters = {
    showCookieBanner(state) {
        return state.showCookieBanner;
    }
};
