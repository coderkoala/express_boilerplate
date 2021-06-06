import axios from "axios";

class helperAuth {
  getUser() {
    try {
      return JSON.parse(
        localStorage.getItem("currentUserLoggedIn")
      );
    } catch (e) {
      return {};
    }
  }
  setUser(param = null) {
    try {
      localStorage.setItem("currentUserLoggedIn", JSON.stringify(param));
      return true;
    } catch (e) {
      return false;
    }
  }
  login(data) {
    return axios.post('authenticate', data);
  }
  logout(data) {
    localStorage.removeItem("currentUserLoggedIn");
  }
}

export default new helperAuth();
