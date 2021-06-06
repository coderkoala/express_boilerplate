import userService from './_helpers';
import router from '@/router';


const user = userService.getUser();
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

const actions = {
  login({ dispatch, commit }, data) {
    // commit("loginRequest", { username });
    userService.login(data).then(
      (xhr) => {
        commit("instantiate", xhr.data);
        userService.setUser(xhr.data);
        router.push("/dashboard");
      },
      (error) => {
        commit("destroy", {status:'error', message: error});
        dispatch("alert/error", error, { root: true });
      }
    );
  },
  logout({ commit }) {
    userService.logout();
    commit("destroy", {status:'loggedOut', message: null});
    router.push("/login");
  },
};

const mutations = {
  instantiate(state, user) {
    state.status = 'loggedIn';
    state.user = user;
    state.message = null;
  },
  destroy(state, data = null) {
    state.status = data.status || 'loggedOut';
    state.message = data.message || null;
    state.user = null;
  }
};

const getters = {
  returnState: (state) => {
    return state;
  },
};

export const account = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
