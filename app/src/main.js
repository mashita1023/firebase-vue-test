import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase/app'

Vue.config.productionTip = false

const config= {
  apiKey: 'AlzaSyDN-pHpKQy7zwuKjo0W5TqkgEf3Rz3n9Ds',
  authDomain: 'seeft-b33c1.firebaseapp.com',
  projectId: 'seeft-b33c1',
  messagingSenderId: '996031841995',
  appId: '1:996031841995:web:5f103437750070189fbd4e',
  measurementId: 'G-9D8R8CGGNB'
}
console.log(config)
// const app = firebase.initializeApp(config)
// const analytics = firebase.getAnalytics(app)
firebase.initializeApp(config)

let api

firebase.auth().onAuthStateChanged(user => {
  if (!api) {
    console.log(user)
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
