import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  axios.defaults.baseURL = " ";
  axios.defaults.withCredentials = true;
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
