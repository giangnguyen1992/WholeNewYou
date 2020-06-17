export const state = () => ({
    showCookieBanner: false
});

export const mutations = {
    userAcceptCookies(state) {
        state.showCookieBanner = true;
    },
    userHasAcceptedCookie(state) {
        state.showCookieBanner = false;
    }
};

export const actions = {
    userAcceptCookies({ commit }) {
        commit('userAcceptCookies');
    },
    userHasAcceptedCookie({ commit }) {
        commit('userHasAcceptedCookie');
    }
};

export const getters = {
    showCookieBanner(state) {
        return state.showCookieBanner;
    }
};
