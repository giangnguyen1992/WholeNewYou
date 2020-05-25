import Vuex from 'vuex';
import data from '~/data/langdingpage.json';

const createStore = () =>
    new Vuex.Store({
        state: {
            landingpageData: data
        },
        getters: {
            hero(state) {
                return state.landingpageData.hero;
            },
            customerNeeds(state) {
                return state.landingpageData.customerNeeds;
            },
            benefits(state) {
                return state.landingpageData.benefits;
            },
            courseOverview(state) {
                return state.landingpageData.courseOverview;
            },
            about(state) {
                return state.landingpageData.about;
            },
            timer(state) {
                return state.landingpageData.timer;
            },
            productOverview(state) {
                return state.landingpageData.productOverview;
            },
            footer(state) {
                return state.landingpageData.footer;
            }
        }
    });

export default createStore;
