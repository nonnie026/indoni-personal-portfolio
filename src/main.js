import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { firebase } from "@firebase/app";
require("firebase/analytics");
require("firebase/app");

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_SENDER_ID
});

firebase.analytics();
Vue.prototype.$analytics = firebase.analytics();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
