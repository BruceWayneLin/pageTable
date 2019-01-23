const state = {
    version: "",
    game_id: "",
    game_host: "",
    api_host: "",
    redirect_url: "",
    game_info: [],
    debug: false
}

const getters = {

}

const actions = {

}

const mutations = {
    setConfig(state, payload) {
        state.version = payload.version;
        state.game_id = payload.game_id;
        state.game_host = payload.game_host;
        state.api_host = payload.api_host;
        state.redirect_url = payload.redirect_url;
        state.debug = payload.debug;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}