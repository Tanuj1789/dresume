import './firebase';// isse firebase ko throughout access kar payenge
import { firestorePlugin } from 'vuefire'
import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import VueRouter from 'vue-router';
import Home from './components/Home.vue'
// import Experience from './components/experience.vue'
import Education from './components/education.vue'
import Skills from './components/skills.vue'
import Achievements from './components/achievements.vue'
import Contact from './components/contact.vue'

// import firebase from 'firebase'

// var firebaseConfig={

//     apiKey: "AIzaSyASPodOpvjSVV0x5mWJBJZk0Ou0hxM0OuE",
//     authDomain: "reveiwers.firebaseapp.com",
//     projectId: "reveiwers",
//     storageBucket: "reveiwers.appspot.com",
//     messagingSenderId: "796394826649",
//     appId: "1:796394826649:web:a811543346b136c77e4108"
// };
// firebase.initializeApp(firebaseConfig)
Vue.use(firestorePlugin)
Vue.use(VueRouter);
const routes=[
  { path: '/',
    component:Home
  },
  { path: '/skills',
    component:Skills
  },
  { path: '/education',
    component:Education
  },
  // { path: '/experience',
  //   component:Experience
  // },
  { path: '/achievements',
    component:Achievements
  },
  {
    path: '/contact',
    //for dynamic use
    // path: '/users/:teamid',
    component:Contact
  },
];
const router= new VueRouter({
  routes,
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')