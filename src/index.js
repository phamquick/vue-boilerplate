import {configRouter} from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

require('./includes');


global.router = new VueRouter(Config.App.VueRouter);



configRouter(router)

var App = Vue.extend(require('./views/app.vue'));

router.start(App, '#app');