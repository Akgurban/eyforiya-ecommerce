import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  axios.defaults.baseURL = "http://192.168.1.126:2000";
  // axios.defaults.baseURL = 'https://api.johntest.site'
  //   axios.defaults.withCredentials = true;
  return {
    provide: {
      axios: axios,
    },
  };
});
