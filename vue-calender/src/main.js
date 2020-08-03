import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize)
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyC3257xtSHCneY51Y2piow1K8J4LcU02ek",
  authDomain: "vue-calender-6001c.firebaseapp.com",
  databaseURL: "https://vue-calender-6001c.firebaseio.com",
  projectId: "vue-calender-6001c",
  storageBucket: "vue-calender-6001c.appspot.com",
  messagingSenderId: "741837087785",
  appId: "1:741837087785:web:922d4e58191239513c6838",
  measurementId: "G-KSQ70XEHN7"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
