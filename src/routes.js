import Home from './components/Home.vue'
import E404 from './components/errors/404.vue'

export function configRouter (router) {
	router.map({
		'/': {
			component: Home,
			name: 'home'
		},
		'*': {
			component: E404
		}
	});

	router.beforeEach(function(transition){
		transition.next();
	});
}