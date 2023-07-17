import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  // axios.defaults.baseURL = "http://duypbaha.com.tm";
  axios.defaults.baseURL = "http://216.250.9.21:2000";
  return {
    provide: {
      axios: axios,
      width: computed({
        get: () => {
          if (process.client) {
            return window.innerWidth > "640" ? "desktop" : "mobile";
          }
        },
      }),
    },
  };
});
