import axios from "axios";

const baseUrl = "https://qbanksenura.herokuapp.com";

export default {
  auth() {
    return {
      register: (newUser) => axios.post(baseUrl + "/api/auth/signup", newUser),
      login: (loginUser) => axios.post(baseUrl + "/api/auth/signin", loginUser),
    };
  },
};
