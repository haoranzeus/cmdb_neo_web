// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/adminlte/dist/css/AdminLTE.css'
import './assets/zhr/test.css'
import './assets/adminlte/bower_components/bootstrap/dist/css/bootstrap.min.css'
import './assets/adminlte/bower_components/font-awesome/css/font-awesome.min.css'
import './assets/adminlte/bower_components/Ionicons/css/ionicons.min.css'
import './assets/adminlte/dist/css/AdminLTE.min.css'
import './assets/adminlte/dist/css/skins/_all-skins.min.css'
import './assets/adminlte/bower_components/morris.js/morris.css'
import './assets/adminlte/bower_components/jvectormap/jquery-jvectormap.css'
import './assets/adminlte/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'
import './assets/adminlte/bower_components/bootstrap-daterangepicker/daterangepicker.css'
import './assets/adminlte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  http: {
    root: '/root'
  },
  components: { App }
})
